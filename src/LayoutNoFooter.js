import React from 'react'
import styled from 'styled-components'

// why can't I use styled(OtherComponent) here?
const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  border: solid 0.75rem #1b2341;
`

export const LayoutNoFooter = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
