// @flow
import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import Radium from 'radium'

type Props = {
  children: any,
  hide: () => void,
  onClick: () => void,
}

type State = {
  isActive: boolean,
}

@Radium
class DropdownTrigger extends PureComponent {
  props: Props
  state: State
  _onWindowClick: (Event) => void

  constructor(props: Props) {
    super(props)
    this.state = {isActive: false}
    this._onWindowClick = this.onWindowClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this._onWindowClick)
    window.addEventListener('touchstart', this._onWindowClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._onWindowClick)
    window.removeEventListener('touchstart', this._onWindowClick)
  }

  onWindowClick(event: Event) {
    const dropdownElement = findDOMNode(this)
    if (event.target !== dropdownElement && !dropdownElement.contains(event.target)) {
      this.props.hide()
    }
  }

  render() {
    const {children, onClick} = this.props
    return (
      <a onClick={onClick}>
        {children}
      </a>
    )
  }
}

DropdownTrigger.displayName = 'DropdownTrigger'

export default DropdownTrigger
