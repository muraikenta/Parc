import React from 'react'
import ReactMarkdown from 'react-markdown'
import FavoriteBtn from './favorite_btns/favorite_btn'
import UnfavoriteBtn from './favorite_btns/unfavorite_btn'


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

export default Post
