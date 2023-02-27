import React from "react"
import styled from "styled-components"

const List = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
`

const Item = styled.li`
  color: #37352f;
  flex-direction: row;
  margin-top: 0.4em;
  min-height: 30px;
  align-items: flex-start;
  list-style-type: disc;
`

interface BulletedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode[]
}

export const BulletedList = ({ children, ...props }: BulletedListProps) => {
  return (
    <List {...props}>
      {children?.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  )
}
