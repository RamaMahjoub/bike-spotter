import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface Props {
    title: string
}

const Wrapper = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    flex: '1 1 0%',
    width: '100%'
}))

const Logo = styled('img')(() => ({
    height: 48,
    width: 48
}))

const PageHeader = ({ title }: Props) => {
    return (
        <Wrapper>
            <Logo 
                alt='logo'
                src='/bike.png'
            />
            <Typography
                color="primary"
                variant="h1"
            >
                {title}
            </Typography>
        </Wrapper>
    )
}

export default PageHeader
