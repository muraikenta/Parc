import React from 'react'
import Radium from 'radium'

const FormError = ({messages = []}) => (
  <ul style={styles.root}>
    {messages.map((message, i) => (
      <li key={i} style={styles.item}>{message}</li>
    ))}
  </ul>
)

const styles = {
  root: {
    color: 'red',
  },
  item: {
  },
}

export default Radium(FormError)
