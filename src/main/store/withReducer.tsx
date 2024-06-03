import { Reducer } from '@reduxjs/toolkit'
import { FC } from 'react'
import { injectReducer } from '.'

export function withReducer<P extends object>(key: string, reducer: Reducer) {
    return (WrappedComponent: FC<P>) => {
        injectReducer(key, reducer)

        const WithReducer = (props: P) => {
            return <WrappedComponent {...props} />
        }
        return WithReducer
    }
}

export default withReducer
