import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken !== null && accessToken !== undefined) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    if (error === null || error === undefined) {
      throw new Error("error is null or undefined");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 30);
        setCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return api(orginialRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error.response.data);
  }
);

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (!error || !error.response) {
//       throw error;
//     }

//     const { config } = error;

//     try {
//       const {
//         data: { accessToken },
//         status: newStatus,
//       } = await getNewTokens();
//       if (newStatus === 200 && accessToken) {
//         setCookie("accessToken", accessToken, 30);
//         return await api(config);
//       }
//     } catch (tokenError) {
//       throw tokenError;
//     }
//     throw error;
//   }
// );

export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return Promise.resolve({ status: 400, data: null });

  try {
    const response = await api.post("auth/refresh-token", {
      refreshToken,
    });

    if (!response) return Promise.resolve({ status: 400, data: null });

    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeCookie("refreshToken");
    }

    return Promise.reject(error);
  }
};
