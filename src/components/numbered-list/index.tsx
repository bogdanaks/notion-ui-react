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

const Number = styled.div`
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
    content: "${(props: { value: number }) => props.value}.";
    font-family: "SegoeUI", sans-serif;
    -webkit-font-smoothing: auto;
    font-size: 16px;
  }
`

interface NumberedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode[]
}

export const NumberedList = ({ children, ...props }: NumberedListProps) => {
  return (
    <List {...props}>
      {children?.map((item, index) => (
        <Item key={index}>
          <Number value={index + 1} />
          {item}
        </Item>
      ))}
    </List>
  )
}
