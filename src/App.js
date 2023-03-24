import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import './App.css'
import Contact from './layout/Contact'
import Header from './layout/Header'
import InfoAdd from './layout/InfoAdd'
import { getUsers } from './store/userSlice'

function App() {
	const dispatch = useDispatch()
	const { users, user } = useSelector((state) => state.user)

	const [usersDataSort, setUsersDataSort] = useState(users)

	useEffect(() => {
		setUsersDataSort(users)
	}, [users])

	useEffect(() => {
		setUsersDataSort(users)
		dispatch(getUsers())
	}, [])

	return (
		<StyledContainer>
			<StyledContainerMini>
				<Header setUsersDataSort={setUsersDataSort} users={users} />
				<Contact users={usersDataSort} user={user} />
			</StyledContainerMini>
			{user !== null && <InfoAdd user={user} />}
		</StyledContainer>
	)
}

export default App

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	@media (max-width: 910px) {
		display: flex;
		flex-direction: column;
	}
`

const StyledContainerMini = styled.div`
	width: 100%;
`
