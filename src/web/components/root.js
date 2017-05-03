import React from 'react'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from '../containers/header_container'
import Landing from '../containers/landing_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path='/' component={Landing} />
      </div>
    </Router>
  </Provider>
)

export default Root
