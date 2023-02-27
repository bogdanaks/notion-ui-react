import React from "react"
import styled from "styled-components"

const List = styled.ol`
  padding-left: 20px;
  list-style-type: decimal;
`

const Item = styled.li`
  color: #37352f;
  flex-direction: row;
  margin-top: 0.4em;
  min-height: 30px;
  align-items: flex-start;

  ::marker {
    font-family: "Segoe UI", sans-serif;
  }
`

interface NumberedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode[]
}

export const NumberedList = ({ children, ...props }: NumberedListProps) => {
  return (
    <List {...props}>
      {children?.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  )
}
