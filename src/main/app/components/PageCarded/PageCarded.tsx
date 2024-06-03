import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

type PageCardedProps = {
    header: ReactNode
    content: ReactNode
}

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    flex: '1 1 auto',
    position: 'relative',

    '& .PageCarded-header': {
        display: 'flex',
        flex: '0 0 auto',
        padding: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8)
        }
    },

    '& .contentContainer': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        height: '100%',
        padding: theme.spacing(0, 4, 4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 8, 8)
        },
        overflow: 'hidden',
        zIndex: 10
    },

    '& .PageCarded-Wrapper': {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        overflow: 'auto'
    }
}))

const PageCarded = ({ header, content }: PageCardedProps) => {
    return (
        <Root>
            <div className={'PageCarded-header'}>{header}</div>
            <div className="contentContainer">
                <div className="PageCarded-wrapper">{content}</div>
            </div>
        </Root>
    )
}

export default PageCarded
