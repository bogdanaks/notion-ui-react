import React from "react"
import styled from "styled-components"

const ALink = styled.a`
  color: #37352f;
  font-size: inherit;
  font-family: "SegoeUI", sans-serif;
  -webkit-font-smoothing: auto;

  cursor: pointer;
  word-wrap: break-word;
  text-decoration: inherit;
  border-bottom: 0.05em solid;
  border-color: rgba(55, 53, 47, 0.4);
  opacity: 0.7;
`

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  style?: React.CSSProperties
  target?: React.HTMLAttributeAnchorTarget
}

export const Link = ({ children, href, style, target, ...props }: LinkProps) => {
  return (
    <ALink href={href} style={style} target={target} {...props}>
      {children}
    </ALink>
  )
}
