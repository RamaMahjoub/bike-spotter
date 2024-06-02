import { Palette } from '@mui/material/styles'
import { PartialDeep } from 'type-fest'

export type ThemeType = {
    palette: PartialDeep<Palette>
}

const lightColor = '47, 43, 61' //#2f2b3d
const whiteColor = '#FFF'

export const lightPaletteText = {
    primary: `rgba(${lightColor}, 0.78)`,
    secondary: `rgba(${lightColor}, 0.68)`,
    disabled: `rgba(${lightColor}, 0.42)`
}

const themeConfig: ThemeType = {
    palette: {
        mode: 'light',
        divider: `rgba(${lightColor}, 0.16)`,
        text: lightPaletteText,
        common: {
            black: 'rgb(16, 19, 34)',
            white: 'rgb(255, 255, 255)'
        },
        primary: {
            light: '#3A3E52',
            main: '#101322',
            dark: '#000004',
            contrastText: whiteColor
        },
        secondary: {
            light: '#FF6A65',
            main: '#E0382F',
            dark: '#A62A26',
            contrastText: whiteColor
        },
        error: {
            light: '#ED6F70',
            main: '#EA5455',
            dark: '#CE4A4B',
            contrastText: whiteColor
        },
        warning: {
            light: '#FFAB5A',
            main: '#FF9F43',
            dark: '#E08C3B',
            contrastText: whiteColor
        },
        info: {
            light: '#1FD5EB',
            main: '#00CFE8',
            dark: '#00B6CC',
            contrastText: whiteColor
        },
        success: {
            light: '#42CE80',
            main: '#28C76F',
            dark: '#23AF62',
            contrastText: whiteColor
        },
        background: {
            paper: '#FFFFFF',
            default: '#f1f5f9'
        },
        action: {
            active: `rgba(${lightColor}, 0.54)`,
            hover: `rgba(${lightColor}, 0.02)`,
            selected: `rgba(${lightColor}, 0.06)`,
            selectedOpacity: 0.06,
            disabled: `rgba(${lightColor}, 0.26)`,
            disabledBackground: `rgba(${lightColor}, 0.12)`,
            focus: `rgba(${lightColor}, 0.12)`
        }
    }
}

export default themeConfig
