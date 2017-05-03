import React from 'react'
import {connect} from 'react-redux'

class MyPage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>にんじゃわんこ</h1>
      </div>
    )
  }
}

export default connect()(MyPage)
