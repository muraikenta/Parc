import React from 'react'
import Markdown from './markdown'

class Post extends React.PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <Markdown source={this.props.content} />
        <div style={styles.iconSection}>
          <div style={styles.iconBlock}>
            <img src='/images/retweet_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>1</span>
          </div>
          <div style={styles.iconBlock}>
            <img src='/images/fav_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>2</span>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    padding: '12px 16px',
    borderLeft: '1px solid #e6ecf0',
    borderRight: '1px solid #e6ecf0',
    borderBottom: '1px solid #e6ecf0',
  },
  iconSection: {
    display: 'flex',
    passingTop: 5,
  },
  iconBlock: {
    cursor: 'pointer',
    marginRight: 40,
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

export default Post
