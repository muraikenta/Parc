import React from 'react'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from '../containers/header_container'
import Landing from '../containers/landing_container'
import Timeline from '../containers/timeline_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path='/' component={Landing} />
        <Route path='/timeline' component={Timeline} />
      </div>
    </Router>
  </Provider>
)

export default Root
