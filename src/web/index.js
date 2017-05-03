import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import Root from './components/root'

const rootElement = document.getElementById('react-root')

if (rootElement) {
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  )

  render(
    <Root store={store} />,
    rootElement
  )
}
