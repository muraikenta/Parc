// @flow
import React from 'react'
import Radium from 'radium'

type Props = {
  messages: string[],
}

const FormError = (props: Props) => {
  const {messages} = props
  if (messages.length === 0) {
    return <div />
  }

  return (
    <ul style={styles.root}>
      {messages.map((message, i) => (
        <li key={i} style={styles.item}>{message}</li>
      ))}
    </ul>
  )
}

const styles = {
  root: {
    marginTop: 10,
    color: '#e40303',
  },
  item: {},
}

export default Radium(FormError)
