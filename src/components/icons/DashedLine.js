import * as React from "react";
const DashedLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={328}
    height={1}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeDasharray="8 8"
      strokeOpacity={0.25}
      d="M0 .5h328"
    />
  </svg>
);
export default DashedLine;
