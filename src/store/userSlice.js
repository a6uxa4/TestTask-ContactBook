import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiInstance from '../api/api-Instance'

export const getUsers = createAsyncThunk(
	'user/getUsers',
	async (_, { rejectWithValue }) => {
		try {
			const response = await apiInstance.get('users')
			return response.data
		} catch (error) {
			rejectWithValue(error.message)
		}
	},
)

export const getUser = createAsyncThunk(
	'user/getUser',
	async (id, { rejectWithValue }) => {
		try {
			const response = await apiInstance.get(`users/${id}`)
			return response.data
		} catch (error) {
			rejectWithValue(error.message)
		}
	},
)

export const putUser = createAsyncThunk(
	'user/putUser',
	async ({ id, data }, { rejectWithValue, dispatch }) => {
		try {
			const response = await apiInstance.put(`users/${id}`, data)
			dispatch(getUsers())
			return response.data
		} catch (error) {
			rejectWithValue(error.message)
		}
	},
)

const initialState = {
	users: [],
	user: null,
	isLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		deleteUser(state, action) {
			state.user = action.payload
		},
	},
	extraReducers: {
		[getUsers.pending]: (state) => {
			state.isLoading = true
		},
		[getUsers.fulfilled]: (state, action) => {
			state.isLoading = false
			state.users = action.payload
		},
		[getUsers.rejected]: (state) => {
			state.isLoading = false
		},

		[getUser.pending]: (state) => {
			state.isLoading = true
		},
		[getUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.user = action.payload
		},
		[getUser.rejected]: (state) => {
			state.isLoading = false
		},

		[putUser.pending]: (state) => {
			state.isLoading = true
		},
		[putUser.fulfilled]: (state) => {
			state.isLoading = false
		},
		[putUser.rejected]: (state) => {
			state.isLoading = false
		},
	},
})

export const { deleteUser } = userSlice.actions

export default userSlice
