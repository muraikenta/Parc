import React from 'react'
import ReactMarkdown from 'react-markdown'

const styles = {
  wrapper: {
    padding: '9px 12px',
    borderLeft: '1px solid #e6ecf0',
    borderRight: '1px solid #e6ecf0',
    borderBottom: '1px solid #e6ecf0',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    passingTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconStatus: {
    marginLeft: 7,
    color: 'rgba(170, 184, 194, 1)',
  },
}

class Post extends React.PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <ReactMarkdown
          source={this.props.content}
        />
        <div style={styles.iconWrapper}>
          <div style={{cursor: 'pointer'}}>
            <img src='/images/retweet_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>1</span>
          </div>
          <div style={{cursor: 'pointer'}}>
            <img src='/images/fav_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>2</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
