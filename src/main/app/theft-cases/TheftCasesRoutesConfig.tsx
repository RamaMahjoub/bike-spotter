import lazyWithReducer from 'main/store/lazyWithReducer'
import { reducer } from './store'
import { RouteObject } from 'react-router-dom'

const TheftCasesList = lazyWithReducer(
    'theftCases',
    () => import('./theft-cases-list'),
    reducer
)

const TheftCasesRoutesConfig: RouteObject[] = [
    {
        path: '/theft-cases',
        children: [
            {
                path: '',
                element: <TheftCasesList />
            }
        ]
    }
]

export default TheftCasesRoutesConfig
