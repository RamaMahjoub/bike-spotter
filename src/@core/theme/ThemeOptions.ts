import { ThemeOptions, createTheme } from '@mui/material/styles'
import { ThemeType } from './palette'
import { merge } from 'lodash'
import typography from './typography'
import Overrides from './overrides'

export function generateMuiTheme(theme: ThemeType) {
    const data = merge({}, defaultThemeOptions, theme)

    return createTheme(merge({}, data, {} as ThemeOptions))
}

const defaultThemeOptions = {
    typography,
    components: {
        ...Overrides()
    }
}

export default defaultThemeOptions
