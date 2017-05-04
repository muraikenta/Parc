import React from 'react'
import {Provider} from 'react-redux'

import {BrowserRouter as Router} from 'react-router-dom'

import {
  OnlyBeforeSignedInRoute,
  PrivateRoute,
} from '../containers/router'

import Header from '../containers/header'
import Landing from '../containers/landing_container'
import Timeline from '../containers/timeline_container'
import MyPage from '../containers/mypage_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div style={{paddingTop: 50}}>
          <OnlyBeforeSignedInRoute path='/' exact={true} component={Landing} />
          <PrivateRoute path='/timeline' component={Timeline} />
          <PrivateRoute path='/mypage' component={MyPage} />
        </div>
      </div>
    </Router>
  </Provider>
)

export default Root
