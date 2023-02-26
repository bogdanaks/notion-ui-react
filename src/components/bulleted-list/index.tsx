import React from "react"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  color: #37352f;
  display: flex;
  flex-direction: row;
  margin-top: 0.4em;
  min-height: 30px;
  align-items: flex-start;
`

const Bullet = styled.div`
  display: flex;
  min-width: 30px;
  min-height: 30px;
  user-select: none;
  margin-right: 2px;
  font-size: 1.5em;
  line-height: 1;
  align-items: center;
  justify-content: center;

  ::before {
    content: "•";
    font-family: Arial;
  }
`

interface BulletedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode[]
}

export const BulletedList = ({ children, ...props }: BulletedListProps) => {
  return (
    <List {...props}>
      {children?.map((item, index) => (
        <Item key={index}>
          <Bullet />
          {item}
        </Item>
      ))}
    </List>
  )
}
