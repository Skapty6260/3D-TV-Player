import { configureStore } from '@reduxjs/toolkit'
import { sceneBreakpointReducer } from './slices/SceneBreakpoint'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { selectedVideoReducer } from './slices/CurrentVideo'

export const store = configureStore({
	reducer: {
		SceneBreakpoint: sceneBreakpointReducer,
		CurrentVideo: selectedVideoReducer,
	},
})

// Types
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector
