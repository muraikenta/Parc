import React from 'react'

class Post extends React.PureComponent {
  render() {
    return (
      <li>{this.props.content}</li>
    )
  }
}

export default Post
