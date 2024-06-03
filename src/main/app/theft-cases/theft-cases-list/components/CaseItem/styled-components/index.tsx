import Avatar, { AvatarProps } from '@mui/material/Avatar'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemAvatar, {
    ListItemAvatarProps
} from '@mui/material/ListItemAvatar'
import { styled } from '@mui/material/styles'
import ListItem, { ListItemProps } from '@mui/material/ListItem'

export const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
    '&:first-of-type': {
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1)
    },
    '&:last-of-type': {
        borderBottomLeftRadius: theme.spacing(1),
        borderBottomRightRadius: theme.spacing(1)
    },
    alignItems: 'stretch',
    padding: theme.spacing(3),
    transition: 'all 0.2s',
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap'
    },
    backgroundColor: theme.palette.action.hover,
    '&:hover': {
        boxShadow: `0 3px 10px 0 ${theme.palette.divider}`,
        transform: 'translateY(-1px)',
        borderBottomColor: 'transparent'
    }
}))

export const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    width: '100%',
    height: 146,
    [theme.breakpoints.down('md')]: {
        height: 260
    }
}))

export const StyledListItemAvatr = styled(ListItemAvatar)<ListItemAvatarProps>(
    ({ theme }) => ({
        width: 220,
        marginTop: theme.spacing(0),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(2),
        }
    })
)

export const InfoWrapper = styled(Box)<BoxProps>(() => ({
    width: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 8
}))

export const StackItem = styled('div')(({ theme }) => ({
    display: 'flex',
    placeContent: 'center',
    gap: 4,
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
    }
}))