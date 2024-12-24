import * as React from "react";
const SignIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={39} height={39} x={0.5} y={0.5} stroke="#28A745" rx={7.5} />
    <path
      stroke="#28A745"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m19.68 22.62 2.56-2.56-2.56-2.56M12 20.06h10.17"
    />
    <path
      stroke="#28A745"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20 12c4.42 0 8 3 8 8s-3.58 8-8 8"
    />
  </svg>
);
export default SignIn;
