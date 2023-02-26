import React from "react"
import { backgroundColors, textColors, Colors } from "../../shared/configs"
import styled from "styled-components"

interface SpanProps {
  bold: boolean
  italicize: boolean
  underline: boolean
  textColor: Colors
  bgColor: Colors
}

const Container = styled.div`
  display: block;
  width: 100%;
`

const Span = styled.span`
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

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  bold?: boolean
  italicize?: boolean
  underline?: boolean
  style?: React.CSSProperties
  textColor?: Colors
  bgColor?: Colors
}

export const Text = ({
  children,
  bold = false,
  italicize = false,
  underline = false,
  style,
  textColor = "default",
  bgColor = "default",
  ...props
}: TextProps) => {
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
