import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v6m3-3H9m3.29 6.998C18.096 17.934 21 15.918 21 11c0-5-3-7-9-7s-9 2-9 7c0 3.077 1.136 5.018 3.409 6.056L5 21l7.29-3.002Z"
    />
  </svg>
)
export default SvgComponent

