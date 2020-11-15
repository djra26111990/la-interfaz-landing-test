import React from 'react'
import Div from '../styles/Contactanos.styles'
import Button from './Button'

const Contactanos = (props) => {
  return (
    <Div>
      <h2>
        <strong>{props.title}</strong>
      </h2>
      <p>{props.text}</p>
      <Button text='ENVÍAR MENSAJE' />
    </Div>
  )
}

export default Contactanos
