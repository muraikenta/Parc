// @flow
import React from 'react'
import Post from '../components/post'

type Props = {
  posts: Object[],
  favorite: (Object) => void,
  unfavorite: (Object) => void,
}

class Timeline extends React.PureComponent {
  props: Props
  
  render() {
    return (
      <div style={style}>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            favorite={() => { this.props.favorite(post) }}
            unfavorite={() => { this.props.unfavorite(post) }}
          />
        ))}
      </div>
    )
  }
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 30,
  borderTop: '1px solid #e6ecf0',
  background: 'white',
}

export default Timeline
