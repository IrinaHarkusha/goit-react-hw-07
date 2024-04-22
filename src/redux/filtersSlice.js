import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	filter: '',
}

const sliceFilter = createSlice({
	name: 'filter',
	initialState,
	selectors: {
		selectFilter: state => state.filter,
	},
	reducers: {
		changeSearchStr: (state, { payload }) => {
			state.filter = payload
		},
	},
})

export const filterReducer = sliceFilter.reducer
export const { changeSearchStr } = sliceFilter.actions
export const { selectFilter } = sliceFilter.selectors