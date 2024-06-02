import { ReactNode } from 'react'

import { generateMuiTheme } from './ThemeOptions'
import { ThemeProvider } from '@mui/material/styles'
import themeConfig from './palette'

interface Props {
    children: ReactNode
}

const ThemeComponent = ({ children }: Props) => {
    const theme = generateMuiTheme(themeConfig)
    // console.log('themeeeeeeeeeeee',JSON.stringify(theme))
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeComponent
