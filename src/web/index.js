import '../lib/lodash_mixin'
import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Cookies from 'js-cookie'
import {fetchMe, setIsSignedIn} from '../actions/session'
import reducer from '../reducers'
import Root from './components/root'

const rootElement = document.getElementById('react-root')

if (rootElement) {
  injectTapEventPlugin()

  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  )

  const authData = Cookies.getJSON('authData')
  if (authData) {
    store.dispatch(setIsSignedIn(authData))
    store.dispatch(fetchMe(authData))
  }

  render(
    <Root store={store} />,
    rootElement
  )
}
