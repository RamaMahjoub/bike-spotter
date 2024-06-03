import { Reducer } from '@reduxjs/toolkit'
import store from '.'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AsyncReducersType = {
    [key: string]: Reducer
}

export const ApiStatus = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
} as const

export type StatusType =
    | typeof ApiStatus.IDLE
    | typeof ApiStatus.LOADING
    | typeof ApiStatus.SUCCEEDED
    | typeof ApiStatus.FAILED

export type AsyncStateType<T> = {
    data: T | null
    status: StatusType
    error?: unknown
}
