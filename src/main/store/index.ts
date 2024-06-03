import {
    Reducer,
    ReducersMapObject,
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'
import { AppDispatch, AsyncReducersType, RootState } from './types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const createReducer = (asyncReducers: ReducersMapObject) =>
    combineReducers({
        ...asyncReducers
    } as ReducersMapObject)

const store = configureStore({
    reducer: createReducer({}),
    devTools: process.env.NODE_ENV === 'development'
})

const asyncReducers: AsyncReducersType = {}

export const injectReducer = (key: string, reducer: Reducer) => {
    if (asyncReducers[key]) {
        return false
    }

    asyncReducers[key] = reducer

    store.replaceReducer(createReducer(asyncReducers))

    return store
}

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
