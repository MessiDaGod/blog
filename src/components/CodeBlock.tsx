import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow as theme } from "react-syntax-highlighter/dist/styles/prism"
// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

class CodeBlock extends PureComponent<{ language?: string; value: string }> {
	render() {
		const { language, value } = this.props
		return (
			<SyntaxHighlighter language={language} style={theme}>
				{value.trim()}
			</SyntaxHighlighter>
		)
	}
}

export default CodeBlock