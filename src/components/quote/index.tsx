import React from "react"
import { backgroundColors, Colors, textColors } from "../../shared/configs"
import styled from "styled-components"

interface SpanProps {
  bold: boolean
  italicize: boolean
  underline: boolean
  textColor: Colors
  bgColor: Colors
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

  color: ${(props: SpanProps) => textColors[props.textColor]};
  background: ${(props: SpanProps) => backgroundColors[props.bgColor]};
`

interface QuoteProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  bold?: boolean
  italicize?: boolean
  underline?: boolean
  style?: React.CSSProperties
  textColor?: Colors
  bgColor?: Colors
}

export const Quote = ({
  children,
  bold = false,
  italicize = false,
  underline = false,
  style,
  textColor = "default",
  bgColor = "default",
  ...props
}: QuoteProps) => {
  return (
    <Container>
      <Span
        bold={bold}
        italicize={italicize}
        underline={underline}
        textColor={textColor}
        bgColor={bgColor}
        style={style}
        {...props}
      >
        {children}
      </Span>
    </Container>
  )
}
