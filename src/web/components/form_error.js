import React from 'react'
import Radium from 'radium'

const FormError = ({messages = []}) => {
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
}

export default Radium(FormError)
