import styled from 'styled-components'

export const StyledList = styled.ul`
  margin-right: 50px;
  list-style: none;
`

export const StyledListItem = styled.li`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  margin-top: 5px;
  border: 1px solid gray;
  background: #fafa;
`
