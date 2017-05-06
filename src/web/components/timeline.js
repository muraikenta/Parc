import React from 'react'
import Post from '../components/post'

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 30,
  borderTop: '1px solid #e6ecf0',
  background: 'white',
}

class Timeline extends React.PureComponent {
  render() {
    return (
      <div style={style}>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))}
      </div>
    )
  }
}

export default Timeline
