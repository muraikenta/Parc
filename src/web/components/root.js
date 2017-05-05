import React from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MaterialCustomTheme from '../../lib/styles/material-base-theme'

import {BrowserRouter as Router} from 'react-router-dom'

import {
  OnlyBeforeSignedInRoute,
  PrivateRoute,
} from '../containers/router'

import Header from '../containers/header'
import Landing from '../containers/landing_container'
import Timeline from '../containers/timeline_container'
import MyPage from '../containers/mypage_container'
import UserPage from '../containers/userpage_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(MaterialCustomTheme)}>
        <div>
          <Header />
          <div style={{paddingTop: 50}}>
            <OnlyBeforeSignedInRoute path='/' exact={true} component={Landing} />
            <PrivateRoute path='/timeline' component={Timeline} />
            <PrivateRoute path='/mypage' component={MyPage} />
            <PrivateRoute path='/users/:id' component={UserPage} />
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
)

export default Root
