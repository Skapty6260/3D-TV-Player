import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './slices/SceneBreakpoint'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
	reducer: {
		SceneBreakpoint: reducer,
	},
})

// Types
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector
