import React from 'react'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Hoge = () => (
  <div>hoge</div>
)

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' component={Hoge} />
      </div>
    </Router>
  </Provider>
)

export default Root
