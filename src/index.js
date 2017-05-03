import React from 'react'
import {render} from 'react-dom'

const rootElement = document.getElementById('react-root')

if (rootElement) {
  render(
    <div>
      hogehoge
    </div>,
    rootElement
  )
}
