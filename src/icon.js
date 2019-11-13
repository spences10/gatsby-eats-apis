import React from 'react'
import styled from 'styled-components'

const IconDiv = styled.div`
  height: 20rem;
  width: 20rem;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Icon = ({ file }) => {
  const url = `../images/${file}`
  return <IconDiv url={url} />
}
