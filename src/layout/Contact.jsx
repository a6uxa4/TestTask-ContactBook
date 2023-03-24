import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

function Contact({ users, user }) {
	return (
		<StyledContainerCard>
			{users.map((item) => {
				return <Card key={item.id} user={user} data={item} />
			})}
		</StyledContainerCard>
	)
}

export default Contact

const StyledContainerCard = styled.div`
	margin-top: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`
