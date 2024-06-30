import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const sceneBPSlice = createSlice({
	name: 'SceneBreakpoint',
	initialState: false,
	reducers: {
		setSceneBreakpoint: (state, action: PayloadAction<boolean>) => {
			state = action.payload

			return state
		},
	},
})

const { reducer, actions } = sceneBPSlice
const { setSceneBreakpoint } = sceneBPSlice.actions
export {
	reducer as sceneBreakpointReducer,
	actions as sceneBreakpointActions,
	sceneBPSlice,
	setSceneBreakpoint,
}
