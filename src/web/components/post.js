import React from 'react'
import Markdown from './markdown'
import FavoriteBtn from './favorite_btns/favorite_btn'
import UnfavoriteBtn from './favorite_btns/unfavorite_btn'

class Post extends React.PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.userName}>{this.props.user.name}</span>
        <Markdown source={this.props.content} />
        <div style={styles.iconSection}>
          <div style={styles.iconBlock}>
            <img src='/images/retweet_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>1</span>
          </div>
          {this.props.favorited ? (
            <UnfavoriteBtn
              onClickHandler={this.props.unfavorite}
              favoritesCount={this.props.favoritesCount}
            />
          ) : (
            <FavoriteBtn
              onClickHandler={this.props.favorite}
              favoritesCount={this.props.favoritesCount}
            />
          )}
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
  userName: {
    fontWeight: 'bold',
  },
  iconSection: {
    display: 'flex',
    passingTop: 10,
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
