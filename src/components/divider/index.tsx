import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  visibility: visible;
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`

interface DividerProps {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>
  lineProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Divider = ({ wrapperProps, lineProps }: DividerProps) => {
  return (
    <Wrapper {...wrapperProps}>
      <Line {...lineProps} />
    </Wrapper>
  )
}
