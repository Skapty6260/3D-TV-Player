'use client'
import { selectedVideoActions } from '@/redux/slices/CurrentVideo'
import { sceneBreakpointActions } from '@/redux/slices/SceneBreakpoint'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, UnknownAction, bindActionCreators } from 'redux'

const rootActions = {
	...sceneBreakpointActions,
	...selectedVideoActions,
}

export const useActions = () => {
	const dispatch: Dispatch<UnknownAction> = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
