import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import Input from '../components/UI/input'

export default function Header({ setUsersDataSort, users }) {
	const sortName = () => {
		const sortedData = [...users].sort((a, b) =>
			a.username.localeCompare(b.username),
		)
		setUsersDataSort(sortedData)
	}

	const sortNumber = () => {
		const sortedData = [...users].sort((a, b) =>
			a.phone
				.replace(/[^\d+]/g, '')
				.localeCompare(b.phone.replace(/[^\d+]/g, '')),
		)
		setUsersDataSort(sortedData)
	}

	const handleSearch = (event) => {
		const filteredData = users.filter((user) =>
			user.name.toLowerCase().includes(event.toLowerCase()),
		)
		setUsersDataSort(filteredData)
	}

	return (
		<StyledHeader>
			<Input
				placeholder='Поиск...'
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<Button onClick={() => sortName()}>По именам</Button>
			<Button onClick={() => sortNumber()}>По номерам</Button>
		</StyledHeader>
	)
}
const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	gap: 20px;
	@media (max-width: 610px) {
		flex-direction: column;
		gap: 5;
	}
`
