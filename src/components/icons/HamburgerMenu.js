import * as React from "react";
const HamburgerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#10411B"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M22 2H2M22 10H2M22 18H2"
    />
  </svg>
);
export default HamburgerIcon;
