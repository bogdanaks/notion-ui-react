import React from "react"
import styled from "styled-components"

interface SpanProps {
  bold: boolean
  italicize: boolean
  underline: boolean
}

const Span = styled.span`
  display: block;
  font-size: 16px;
  padding: 3px 2px;
  line-height: 1.5;
  font-family: "SegoeUI", sans-serif;
  -webkit-font-smoothing: auto; 

  font-weight: ${(props: SpanProps) => (props.bold ? "bold" : "500")};
  font-style: ${(props: SpanProps) => (props.italicize ? "italic" : "normal")};
  border-bottom: ${(props: SpanProps) => (props.underline ? "0.05em solid" : "0")};
`

interface TextProps {
  children: React.ReactNode
  bold?: boolean
  italicize?: boolean
  underline?: boolean
  style?: React.CSSProperties
}

export const Text = ({ children, bold = false, italicize = false, underline = false, style }: TextProps) => {
  return (
    <Span bold={bold} italicize={italicize} underline={underline} style={style}>
      {children}
    </Span>
  )
}
