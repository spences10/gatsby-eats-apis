import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 14px;
  color: #44434b;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 2px solid #44434b;
  display: flex;
  justify-content: space-between;
`

export const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>Gatsby eats APIs</span>
      <span>
        <a
          href="https://twitter.com/spences10"
          target="_blank"
          rel="noopener">
          @spences10
        </a>
      </span>
    </Footer>
  </Fragment>
)
