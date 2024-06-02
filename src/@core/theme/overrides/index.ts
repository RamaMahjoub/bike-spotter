import MuiTypography from './typography'
import MuiPagination from './pagination'
import MuiButton from './button'
import MuiList from './list'
import { ComponentsPropsList, Theme } from '@mui/material/styles'

export type OwnerStateThemeType = {
    theme: Theme
    ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
        Record<string, unknown>
}

const Overrides = () => {
    return Object.assign(MuiTypography, MuiPagination, MuiButton, MuiList)
}

export default Overrides
