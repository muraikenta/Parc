import React from 'react'
import Post from '../components/post'

class Timeline extends React.PureComponent {
  render() {
    // test data
    const posts = [
      {
        id: 1,
        content: 'Soma',
      },
      {
        id: 2,
        content: 'Funa',
      },
    ]

    return (
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))}
      </ul>
    )
  }
}

export default Timeline
