import React from "react"
import styled from "styled-components"

import styles from "./styles.module.css"

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
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

interface BulletedListProps {
  children?: React.ReactNode[]
}

export const BulletedList = ({ children }: BulletedListProps) => {
  return (
    <List>
      {children?.map((item, index) => (
        <Item key={index}>
          <Bullet />
          {item}
        </Item>
      ))}
    </List>
  )
}
