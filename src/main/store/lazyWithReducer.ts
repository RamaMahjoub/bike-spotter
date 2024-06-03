import { Reducer } from '@reduxjs/toolkit'
import { ComponentType, lazy } from 'react'
import withReducer from './withReducer'

type ImportFunctionType = () => Promise<{ default: ComponentType<unknown> }>

export function lazyWithReducer(
    key: string,
    importFuction: ImportFunctionType,
    reducer: Reducer
) {
    const lazyComponent = lazy(importFuction)
    return withReducer(key, reducer)(lazyComponent)
}

export default lazyWithReducer
