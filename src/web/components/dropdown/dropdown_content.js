import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

@Radium
class DropdownContent extends PureComponent {
  render () {
    const {children, isActive} = this.props

    if (!isActive) {
      return <div />
    }

    return (
      <div style={[styles.root]}>
        {React.Children.map(children, (child) => (
          React.cloneElement(child, {style: [styles.item]})
        ))}
      </div>
    )
  }
}

const styles = {
  root: {
    position: 'absolute',
    background: 'white',
    boxShadow: '0 3px 10px rgba(0,0,0,0.16)',
    borderRadius: 2,
    color: '#2b546a',
    fontSize: 13,
  },
  item: {
    display: 'block',
    cursor: 'pointer',
    padding: '14px 20px',
    transition: 'all 0.3s ease',

    ':hover': {
      color: '#1c3746',
      background: '#f0f4f9',
    },
  },
}

DropdownContent.displayName = 'DropdownContent'

DropdownContent.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
}

export default DropdownContent
