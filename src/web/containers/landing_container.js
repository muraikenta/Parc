import React from 'react'
import {connect} from 'react-redux'

class Landing extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>エンジニアが集まる場所</h2>
      </div>
    )
  }

}

export default connect()(Landing)
