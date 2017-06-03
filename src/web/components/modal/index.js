import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({style={}, ...props}) => (
  <ReactModal
    style={{...defaultStyle, ...style}}
    {...props}
  >
    {props.children}
  </ReactModal>
)

const defaultStyle = {
  overlay: {
    zIndex: 100,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
  },
  content: {},
}

export default Modal
