import { useTheme } from '@mui/material/styles'
import { hexToRGBA } from '@core/utils'

export type UseBgColorType = {
    [key: string]: {
        color: string
        backgroundColor: string
    }
}
const UseBgColor = () => {
    const theme = useTheme()

    return {
        primaryLight: {
            color: theme.palette.text.secondary,
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.16)
        },
        secondaryLight: {
            color: theme.palette.secondary.main,
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.16)
        },
        successLight: {
            color: theme.palette.success.main,
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.16)
        },
        errorLight: {
            color: theme.palette.error.main,
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.16)
        },
        warningLight: {
            color: theme.palette.warning.main,
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.16)
        },
        infoLight: {
            color: theme.palette.info.main,
            backgroundColor: theme.palette.info.light
        }
    }
}

export default UseBgColor
