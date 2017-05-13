import React from 'react'
import {connect} from 'react-redux'
import MyPageInfo from '../components/my_page_info/my_page_info'

const mapStateToProps = (state) => ({
  userInfo: state.session.me,
})

class MyPageContainer extends React.PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <MyPageInfo {...this.props} />
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}

export default connect(mapStateToProps)(MyPageContainer)
