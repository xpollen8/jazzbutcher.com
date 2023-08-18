import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 3H2a1 1 0 0 0-1 1v16c0 .013.007.023.007.036A1.008 1.008 0 0 0 2 21h20a1.013 1.013 0 0 0 .993-.964c0-.013.007-.023.007-.036V4a1 1 0 0 0-1-1Zm-1 2v12.586l-2.293-2.293A1 1 0 0 0 18 15H6a1 1 0 0 0-.707.293L3 17.586V5ZM4.414 19l2-2h11.172l2 2ZM8 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm8 4a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
  </svg>
)
export default SvgComponent

