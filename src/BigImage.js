import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  width: 80vw;
  position: absolute;
  margin: 0 10vw;
  left: 0;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
`
export const BigImage = ({ src }) => <IMG src={src} />
