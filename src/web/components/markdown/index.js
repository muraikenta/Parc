// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code_block'

type Props = Object

const Markdown = (props: Props) => (
  <ReactMarkdown
    renderers={{...ReactMarkdown.renderers, CodeBlock}}
    {...props}
  />
)

export default Markdown
