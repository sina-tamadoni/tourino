const setCookie = (name, value, days = 30) => {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
};
function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);

  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}
// const getCookie = () => {
//   const accessToken = document.cookie.split(";")[0].split("=")[1];
//   const refreshToken = document.cookie.split(";")[1].split("=")[1];

//   return { accessToken, refreshToken };
// };

export { setCookie, getCookie };
