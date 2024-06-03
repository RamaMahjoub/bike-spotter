import TheftCasesRoutesConfig from 'main/app/theft-cases/TheftCasesRoutesConfig'
import { Navigate, RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
    ...TheftCasesRoutesConfig,
    {
        path: '/',
        element: <Navigate to="theft-cases" />
    }
]
