import React, {PropTypes} from 'react'
import highlight from 'highlight.js'

class CodeBlock extends React.PureComponent {
    componentDidMount() {
      this.highlightCode()
    }

    componentDidUpdate() {
      this.highlightCode()
    }

    highlightCode() {
      highlight.highlightBlock(this.refs.code);
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

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string
}

export default CodeBlock
