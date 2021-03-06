import React from 'react'

class UnfavoriteBtn extends React.PureComponent {
  render() {
    return (
      <div style={{cursor: 'pointer'}} onClick={this.props.onClickHandler}>
        <img src='/images/filled_heart.png' style={styles.icon} />
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
    color: 'rgb(230, 30, 44)',
  },
}

export default UnfavoriteBtn
