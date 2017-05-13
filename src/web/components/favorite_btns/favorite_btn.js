import React from 'react'

class FavoriteBtn extends React.PureComponent {
  render() {
    return (
      <div style={{cursor: 'pointer'}} onClick={this.props.onClickHandler}>
        <img src='/images/empty_heart.png' style={styles.icon} />
        <span style={styles.iconStatus}>{this.props.favoritesCount}</span>
      </div>
    )
  }
}

const styles = {
  icon: {
    width: 20,
    height: 20,
  },
  iconStatus: {
    marginLeft: 7,
    color: 'rgba(170, 184, 194, 1)',
  },
}

export default FavoriteBtn
