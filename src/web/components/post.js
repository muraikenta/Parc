import React from 'react'

const style = {
  padding: '30px 0',
  textAlign: 'center',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  borderBottom: '1px solid #e6ecf0',
}

class Post extends React.PureComponent {
  render() {
    return (
      <div style={style}>
        {this.props.content}
      </div>
    )
  }
}

export default Post
