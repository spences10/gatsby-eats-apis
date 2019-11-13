import React from 'react'
import styled from 'styled-components'

const IconDiv = styled.div`
  height: 15rem;
  width: 15rem;
  position: relative;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Icon = ({ file }) => {
  const url = `../images/${file}`
  return <IconDiv url={url} />
}
