import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getUser } from '../store/userSlice'

function Card({ data, user }) {
	const dispatch = useDispatch()
	return (
		<StyledContainer
			bgColor={data.id === user?.id}
			onClick={() => dispatch(getUser(data.id))}>
			<StyledAvatar>{data.username[0]}</StyledAvatar>
			<StyledTittle bgColor={data.id === user?.id}>
				<span>{data.name}</span>
				<span>{data.phone}</span>
			</StyledTittle>
		</StyledContainer>
	)
}

export default Card

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	background-color: ${(props) => (props.bgColor ? '#94ADCF' : '#38404b')};
	cursor: pointer;
	padding: 8px 10px;
	border-radius: 10px;
	box-shadow: -5px 5px 10px rgba(48, 54, 64, 0.2),
		5px -5px 10px rgba(48, 54, 64, 0.2),
		-5px -5px 10px rgba(64, 74, 86, 0.9), 5px 5px 13px rgba(48, 54, 64, 0.9),
		inset 1px 1px 2px rgba(64, 74, 86, 0.3),
		inset -1px -1px 2px rgba(48, 54, 64, 0.5);
`
const StyledAvatar = styled.div`
	width: 60px;
	height: 60px;
	border: none;
	background-color: #667799;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 25px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-weight: bold;
`
const StyledTittle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	span {
		:nth-child(1) {
			font-size: 20px;
			font-weight: bolder;
			color: ${(props) => (props.bgColor ? 'black' : 'white')};
		}
		:nth-child(2) {
			font-size: 15px;
			color: ${(props) => (props.bgColor ? 'black' : '#bbbbbb')};
		}
	}
`
