// @flow
import React, {cloneElement, PureComponent} from 'react'
import Radium from 'radium'

import DropdownTrigger from './dropdown_trigger'
import DropdownContent from './dropdown_content'

type Props = {
  onHide?: () => void,
  onShow?: () => void,
  style?: Object,
  children?: any,
}

type State = {
  isActive: boolean,
}

@Radium
class Dropdown extends PureComponent {
  props: Props
  state: State

  displayName: 'Dropdown'

  constructor(props: Props) {
    super(props)
    this.state = {isActive: false}
  }

  hide() {
    this.setState({isActive: false}, () => {
      if (this.props.onHide) {
        this.props.onHide()
      }
    })
  }

  show() {
    this.setState({isActive: true}, () => {
      if (this.props.onShow) {
        this.props.onShow()
      }
    })
  }

  onToggleClick(event: Event) {
    event.preventDefault()
    if (this.state.isActive) {
      this.hide()
    } else {
      this.show()
    }
  }

  render() {
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
          },
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

export {DropdownTrigger, DropdownContent}
export default Dropdown
