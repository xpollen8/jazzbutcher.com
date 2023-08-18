import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 0a1 1 0 0 1 .993.883L9 1h2v1h2a1 1 0 0 1 .993.883L14 3v12a1 1 0 0 1-.883.993L13 16H3a1 1 0 0 1-.993-.883L2 15V3a1 1 0 0 1 .883-.993L3 2h2V1h2a1 1 0 0 1 1-1ZM5 4H4v10h8V4h-1v1H5V4Zm5.535 3.293a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414L7 9.414l2.121-2.121a1 1 0 0 1 1.414 0ZM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
)
export default SvgComponent
