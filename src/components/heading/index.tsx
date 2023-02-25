import React from "react"
import styled from "styled-components"

const HeadingWrap = styled.h1`
  display: block;
  font-weight: 600;
  line-height: 1.3;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 3px 2px;
  font-family: "Segoe UI", sans-serif;
  -webkit-font-smoothing: auto;
`

const Heading0 = styled(HeadingWrap)`
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
`

const Heading1 = styled(HeadingWrap)`
  font-size: 1.875em;
`

const Heading2 = styled(HeadingWrap)`
  font-size: 1.5em;
`

const Heading3 = styled(HeadingWrap)`
  font-size: 1.25em;
`

interface HeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  level?: 1 | 2 | 3 | 0
  children: React.ReactNode
}

export const Heading = ({ level = 1, children, ...props }: HeadingProps) => {
  switch (level) {
    case 0:
      return <Heading0 {...props}>{children}</Heading0>
    case 1:
      return <Heading1 {...props}>{children}</Heading1>
    case 2:
      return (
        <Heading2 as="h2" {...props}>
          {children}
        </Heading2>
      )
    case 3:
      return (
        <Heading3 as="h3" {...props}>
          {children}
        </Heading3>
      )

    default:
      return <Heading1 {...props}>{children}</Heading1>
  }
}
