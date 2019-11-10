import styled from 'styled-components'

export const StyledList = styled.ul`
  margin-right: 50px;
  list-style: none;
`

export const StyledListItem = styled.li`
  font-weight: ${props => (props.title ? 'bold' : 'normal')};
  margin-bottom: ${props => (props.title ? '30px' : 'unset')};
  margin-top: 5px;
  border: 2px solid #1b2341;
  background: #fafab1;
`
