import * as React from "react"
import { SVGProps } from "react"
const IconCall = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    viewBox="0 0 400 400"
    {...props}
  >
    <title>{"call"}</title>
    <defs>
      <image
        id="a"
        width={364}
        height={366}
        href="data:image/png;base64,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"
      />
    </defs>
    <use x={18} y={17} href="#a" />
  </svg>
)

export default IconCall