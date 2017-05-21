import React from 'react'
import {Link} from 'react-router-dom'
import Markdown from './markdown'
import UserIcon from './user_icon'
import FavoriteBtn from './favorite_btns/favorite_btn'
import UnfavoriteBtn from './favorite_btns/unfavorite_btn'

class Post extends React.PureComponent {
  render() {
    const {
      user,
      content,
      favorited,
      favoritesCount,
      favorite,
      unfavorite,
    } = this.props

    return (
      <div style={styles.wrapper}>
        <Link to={`/users/${user.username}`} style={styles.userName}>
          <UserIcon image={user.image} style={styles.userIcon} />
          {user.name}
        </Link>
        <Markdown source={content} />
        <div style={styles.iconSection}>
          <div style={styles.iconBlock}>
            <img src='/images/retweet_icon.png' style={styles.icon} />
            <span style={styles.iconStatus}>1</span>
          </div>
          {favorited ? (
            <UnfavoriteBtn
              onClickHandler={unfavorite}
              favoritesCount={favoritesCount}
            />
          ) : (
            <FavoriteBtn
              onClickHandler={favorite}
              favoritesCount={favoritesCount}
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
  userIcon: {
    marginRight: 12,
    float: 'left',
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
