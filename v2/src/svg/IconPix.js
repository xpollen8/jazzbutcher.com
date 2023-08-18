import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 -2 32 32"
    {...props}
  >
    <title>{"camera"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M28 4h-3l-1-2c-.589-1.163-.896-2-2-2H10C8.896 0 8.53.954 8 2L7 4H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4ZM16 24a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-14a6 6 0 0 0 0 12 6 6 0 0 0 0-12Z"
    />
  </svg>
)
export default SvgComponent
