import React, {cloneElement, PureComponent} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import Radium from 'radium'

import DropdownTrigger from './dropdown_trigger'
import DropdownContent from './dropdown_content'

@Radium
class Dropdown extends PureComponent {
  displayName: 'Dropdown'

  constructor (props) {
    super(props)
    this.state = {isActive: false}
  }

  hide () {
    this.setState({isActive: false}, () => {
      if (this.props.onHide) {
        this.props.onHide()
      }
    })
  }

  show () {
    this.setState({isActive: true}, () => {
      if (this.props.onShow) {
        this.props.onShow()
      }
    })
  }

  onToggleClick (event) {
    event.preventDefault()
    if (this.state.isActive) {
      this.hide()
    } else {
      this.show()
    }
  }

  render () {
    const {children} = this.props
    const {isActive} = this.state
    // stick callback on trigger element
    const boundChildren = React.Children.map(children, (child) => {
      if (child.type === DropdownTrigger) {
        const originalOnClick = child.props.onClick
        child = cloneElement(child, {
          ref: 'trigger',
          hide: this.hide.bind(this),
          onClick: (event) => {
            this.onToggleClick(event)
            if (originalOnClick) {
              originalOnClick.apply(child, arguments)
            }
          }
        })
      }

      if (child.type === DropdownContent) {
        child = cloneElement(child, {isActive})
      }

      return child
    })

    return (
      <div style={[styles.dropdown, this.props.style]} >
        {boundChildren}
      </div>
    )
  }
}

const styles = {
  dropdown: {
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#2b546a',

    ':hover': {
      color: '#1c3746',
      background: '#f0f4f9',
    },
  },
}

Dropdown.propTypes = {
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object
}

export {DropdownTrigger, DropdownContent}
export default Dropdown
