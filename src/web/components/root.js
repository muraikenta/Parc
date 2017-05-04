import React from 'react'
import {Provider} from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import {
  OnlyBeforeSignedinRoute,
  PrivateRoute,
} from '../containers/router'

import Header from '../containers/header_container'
import Landing from '../containers/landing_container'
import Timeline from '../containers/timeline_container'
import MyPage from '../containers/mypage_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div style={{paddingTop: 50}}>
          <OnlyBeforeSignedinRoute path='/' exact={true} component={Landing} />
          <PrivateRoute path='/timeline' component={Timeline} />
          <PrivateRoute path='/user/:id' component={MyPage} />
        </div>
      </div>
    </Router>
  </Provider>
)

export default Root
