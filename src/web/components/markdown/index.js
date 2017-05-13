import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code_block'

const Markdown = (props) => (
  <ReactMarkdown
    renderers={{...ReactMarkdown.renderers, CodeBlock}}
    {...props}
  />
)

export default Markdown
