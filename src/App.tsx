import { Provider } from 'react-redux'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import ThemeComponent from './@core/theme/ThemeComponent'
import { routes } from './main/configs/routesConfig'
import store from './main/store'

const App = () => {
    const AppRoutes = () => {
        return useRoutes(routes)
    }
    return (
        <Provider store={store}>
            <ThemeComponent>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeComponent>
        </Provider>
    )
}

export default App
