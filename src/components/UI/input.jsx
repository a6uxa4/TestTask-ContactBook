import React from 'react'
import styled from 'styled-components'

function Input({ placeholder, value, onChange }) {
	return (
		<StyledSearchInput
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	)
}

export default Input

const StyledSearchInput = styled.input`
	padding: 10px 16px;
	background: #38404b;
	box-shadow: 1px 1px 2px rgba(66, 75, 88, 0.3),
		-1px -1px 2px rgba(46, 53, 62, 0.5),
		inset -3px 3px 6px rgba(46, 53, 62, 0.2),
		inset 3px -3px 6px rgba(46, 53, 62, 0.2),
		inset -3px -3px 6px rgba(66, 75, 88, 0.9),
		inset 3px 3px 8px rgba(46, 53, 62, 0.9);
	border-radius: 16px;
	font-family: 'Ubuntu';
	font-weight: 400;
	font-size: 26px;
	color: rgba(148, 173, 207, 0.7);
	outline: none;
	border: none;
`
