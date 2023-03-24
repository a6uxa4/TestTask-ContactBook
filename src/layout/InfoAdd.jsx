import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import InputWithLabel from '../components/UI/InputWithLabel'
import { deleteUser, putUser } from '../store/userSlice'

function InfoAdd({ user }) {
	const [disabled, setDisabled] = useState(true)
	const [inputValues, setInputValues] = useState({
		id: user.id,
		name: user.name,
		website: user.website,
		phone: user.phone,
		username: user.username,
		email: user.email,
		address: {
			city: user.address.city,
		},
		company: {
			name: user.company.name,
		},
	})

	useEffect(() => {
		setInputValues({
			id: user.id,
			name: user.name,
			website: user.website,
			phone: user.phone,
			username: user.username,
			email: user.email,
			address: {
				city: user.address.city,
			},
			company: {
				name: user.company.name,
			},
		})
	}, [user])

	const dispatch = useDispatch()

	function putSave() {
		dispatch(
			putUser({
				id: user.id,
				data: inputValues,
			}),
		)
	}

	return (
		<StyledInfo>
			<Button onClick={() => dispatch(deleteUser(null))}>Назад</Button>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.username}
				label='Nick'
				onChange={(e) =>
					setInputValues({ ...inputValues, username: e.target.value })
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.name}
				label='Name'
				onChange={(e) =>
					setInputValues({ ...inputValues, name: e.target.value })
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.phone}
				label='Phone'
				onChange={(e) =>
					setInputValues({ ...inputValues, phone: e.target.value })
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.email}
				label='Email'
				onChange={(e) =>
					setInputValues({ ...inputValues, email: e.target.value })
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.website}
				label='Website'
				onChange={(e) =>
					setInputValues({ ...inputValues, website: e.target.value })
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.address.city}
				label='City'
				onChange={(e) =>
					setInputValues({
						...inputValues,
						address: {
							...inputValues.address,
							city: e.target.value,
						},
					})
				}
			/>
			<InputWithLabel
				disabled={disabled}
				value={inputValues.company.name}
				label='Company'
				onChange={(e) =>
					setInputValues({
						...inputValues,
						company: {
							...inputValues.company,
							name: e.target.value,
						},
					})
				}
			/>
			<StyledWrapperButton>
				<Button onClick={() => setDisabled(!disabled)}>Изменить</Button>
				<Button disabled={disabled} onClick={() => putSave()}>
					Сохранить
				</Button>
			</StyledWrapperButton>
		</StyledInfo>
	)
}

export default InfoAdd

const StyledInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 50px;
	@media (max-width: 910px) {
		margin-top: 20px;
		margin-left: 20px;
		padding: 0;
		width: 90%;
	}
`
const StyledWrapperButton = styled.div`
	display: flex;
	gap: 10px;
`
