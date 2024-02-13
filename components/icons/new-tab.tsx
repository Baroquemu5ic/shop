import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.color || "#000"}
    width={props.width || "120px"}
    height={props.height || "120px"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
  </svg>
);
export default SVGComponent;
