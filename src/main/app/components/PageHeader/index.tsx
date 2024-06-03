import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface Props {
    title: string
}

const Wrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 1 0%',
    width: '100%'
}))

const PageHeader = ({ title }: Props) => {
    return (
        <Wrapper>
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
