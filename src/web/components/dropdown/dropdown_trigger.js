import React, { PureComponent } from 'react';
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types';
import Radium from 'radium'

@Radium
class DropdownTrigger extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {isActive: false}
    this._onWindowClick = this.onWindowClick.bind(this)
  }

  componentDidMount () {
    window.addEventListener('click', this._onWindowClick)
    window.addEventListener('touchstart', this._onWindowClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this._onWindowClick)
    window.removeEventListener('touchstart', this._onWindowClick)
  }

  onWindowClick (event) {
    const dropdownElement = findDOMNode(this)
    if (event.target !== dropdownElement && !dropdownElement.contains(event.target)) {
      this.props.hide()
    }
  }

  render () {
    const { children, onClick } = this.props
    return (
      <a onClick={onClick}>
        {children}
      </a>
    )
  }
}

DropdownTrigger.displayName = 'DropdownTrigger';

DropdownTrigger.propTypes = {
  children: PropTypes.node,
}

export default DropdownTrigger
