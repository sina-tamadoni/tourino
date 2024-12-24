import * as React from "react";
const Cross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.757 12.757 8.486 8.486M12.757 21.243l8.486-8.486"
    />
  </svg>
);
export default Cross;
