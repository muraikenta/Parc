import React from 'react'
import {connect} from 'react-redux'

class Timeline extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Timeline</h2>
      </div>
    )
  }
}

export default connect()(Timeline)
