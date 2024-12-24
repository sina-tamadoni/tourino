import * as React from "react";
const TorinoH = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={146}
    height={44}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h146v44H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00279 0 0 .0091 -.153 -1.727)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={500}
        height={500}
      />
    </defs>
  </svg>
);
export default TorinoH;
