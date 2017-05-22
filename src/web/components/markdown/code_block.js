// @flow
import React, {PropTypes} from 'react'
import highlight from 'highlight.js'

type Props = {
  language: string,
  literal: string,
}

class CodeBlock extends React.PureComponent {
  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    highlight.highlightBlock(this.refs.code)
  }

  render() {
    return (
        <pre>
          <code ref='code' className={this.props.language}>
            {this.props.literal}
          </code>
        </pre>
    )
  }
}

export default CodeBlock
