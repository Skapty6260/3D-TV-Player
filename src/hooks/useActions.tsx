'use client'
import { actions } from '@/redux/slices/SceneBreakpoint'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, UnknownAction, bindActionCreators } from 'redux'

const rootActions = {
	...actions,
}

export const useActions = () => {
	const dispatch: Dispatch<UnknownAction> = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
