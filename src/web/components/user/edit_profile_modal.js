// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from '../modal'

type Props = {
  isOpen: boolean,
  onRequestClose: () => void,
  onSubmit: (string) => void,
}

type State = {
  value: string,
}

class EditProfileModal extends React.PureComponent {
  props: Props
  state: State

  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  onChange(e: Event) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='EditProfileModal'
      >
        <div style={styles.flexContainer}>
          <div style={styles.flexHeader}>
            <h2>Edit Profile</h2>
          </div>
          <div style={styles.profiles}>
            <textarea
              value={this.state.value}
              style={{...styles.profile, ...styles.textarea}}
              onChange={(e) => { this.onChange(e) }}
            />
            <div style={{...styles.profile, ...styles.markdownPreview}}>
              <ReactMarkdown
                source={this.state.value}
              />
            </div>
          </div>
        </div>
        <div style={styles.flexFooter}>
          <RaisedButton
            type='submit'
            primary={true}
            label='変更を保存'
            onClick={() => { this.props.onSubmit(this.state.value) }}
          />
        </div>
      </Modal>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flexHeader: {
    flex: 0,
    textAlign: 'center',
  },
  profiles: {
    flex: 1,
    display: 'flex',
  },
  profile: {
    flex: 1,
    height: '100%',
    overflow: 'scroll',
  },
  textarea: {
    padding: '0 2px',
  },
  markdownPreview: {
    padding: '0 20px',
    border: '1px solid black',
  },
  flexFooter: {
    flex: 0,
    paddingTop: 20,
    textAlign: 'center',
  },
}

export default EditProfileModal
