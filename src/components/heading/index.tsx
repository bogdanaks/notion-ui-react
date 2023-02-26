import React from "react"
import { backgroundColors, Colors, textColors } from "../../shared/configs"
import styled from "styled-components"

interface HeadingWrapProps {
  bold: boolean
  italicize: boolean
  underline: boolean
  textColor: Colors
  bgColor: Colors
}

const HeadingWrap = styled.h1`
  display: inline;
  font-weight: 600;
  line-height: 1.3;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 3px 2px;
  font-family: "Segoe UI", sans-serif;
  -webkit-font-smoothing: auto;
  margin: 0;

  color: ${(props: HeadingWrapProps) => textColors[props.textColor]};
  background: ${(props: HeadingWrapProps) => backgroundColors[props.bgColor]};
`

const Heading0 = styled(HeadingWrap)`
  color: #37352f;
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

const HeadingContainer = styled.div`
  display: block;
  width: 100%;
`

interface HeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 0
  bold?: boolean
  italicize?: boolean
  underline?: boolean
  textColor?: Colors
  bgColor?: Colors
}

const HeadingWrapper = ({ children }: { children: JSX.Element }) => <HeadingContainer>{children}</HeadingContainer>

export const Heading = ({
  level = 1,
  children,
  bold = false,
  italicize = false,
  underline = false,
  textColor = "default",
  bgColor = "default",
  ...props
}: HeadingProps) => {
  switch (level) {
    case 0:
      return (
        <HeadingWrapper>
          <Heading0
            bold={bold}
            italicize={italicize}
            underline={underline}
            textColor={textColor}
            bgColor={bgColor}
            {...props}
          >
            {children}
          </Heading0>
        </HeadingWrapper>
      )
    case 1:
      return (
        <HeadingWrapper>
          <Heading1
            bold={bold}
            italicize={italicize}
            underline={underline}
            textColor={textColor}
            bgColor={bgColor}
            {...props}
          >
            {children}
          </Heading1>
        </HeadingWrapper>
      )
    case 2:
      return (
        <HeadingWrapper>
          <Heading2
            bold={bold}
            italicize={italicize}
            underline={underline}
            textColor={textColor}
            bgColor={bgColor}
            as="h2"
            {...props}
          >
            {children}
          </Heading2>
        </HeadingWrapper>
      )
    case 3:
      return (
        <HeadingWrapper>
          <Heading3
            bold={bold}
            italicize={italicize}
            underline={underline}
            textColor={textColor}
            bgColor={bgColor}
            as="h3"
            {...props}
          >
            {children}
          </Heading3>
        </HeadingWrapper>
      )

    default:
      return (
        <HeadingWrapper>
          <Heading1
            bold={bold}
            italicize={italicize}
            underline={underline}
            textColor={textColor}
            bgColor={bgColor}
            {...props}
          >
            {children}
          </Heading1>
        </HeadingWrapper>
      )
  }
}
