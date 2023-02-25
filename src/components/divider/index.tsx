import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
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

export const Divider = () => {
  return (
    <Wrapper>
      <Line />
    </Wrapper>
  )
}
