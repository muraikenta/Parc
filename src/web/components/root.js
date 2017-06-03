// @flow
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
import User from '../containers/user/user_container'

type Props = {
  store: Object,
}

const Root = (props: Props) => (
  <Provider store={props.store}>
    <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(MaterialCustomTheme)}>
        <div>
          <Header />
          <div style={{paddingTop: 70}}>
            <OnlyBeforeSignedInRoute path='/' exact={true} component={Landing} />
            <PrivateRoute path='/timeline' component={Timeline} />
            <PrivateRoute path='/users/:username' component={User} />
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
)

export default Root
