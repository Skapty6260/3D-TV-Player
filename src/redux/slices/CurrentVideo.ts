import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	video: '',
}

const selectedVideoSlice = createSlice({
	name: 'SceneBreakpoint',
	initialState: initialState,
	reducers: {
		selectVideo: (state = initialState, action: PayloadAction<string>) => {
			state.video = action.payload

			return state
		},
	},
})

const { reducer, actions } = selectedVideoSlice
const { selectVideo } = selectedVideoSlice.actions
export {
	reducer as selectedVideoReducer,
	actions as selectedVideoActions,
	selectedVideoSlice,
	selectVideo,
}
