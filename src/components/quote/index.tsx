import React from "react"
import styled from "styled-components"

interface SpanProps {
  bold: boolean
  italicize: boolean
  underline: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 14px;
  border-left: 3px solid currentColor;
`
const Span = styled.span`
  color: #37352f;
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

interface QuoteProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  bold?: boolean
  italicize?: boolean
  underline?: boolean
  style?: React.CSSProperties
}

export const Quote = ({
  children,
  bold = false,
  italicize = false,
  underline = false,
  style,
  ...props
}: QuoteProps) => {
  return (
    <Container>
      <Span bold={bold} italicize={italicize} underline={underline} style={style} {...props}>
        {children}
      </Span>
    </Container>
  )
}
