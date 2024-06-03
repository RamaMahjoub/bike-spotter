import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { LIMIT } from 'main/types/PaginationLimit'
import { ChangeEvent } from 'react'

const Wrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2
}))

interface Props {
    page: number
    handleChange: (event: ChangeEvent<unknown>, page: number) => void
    total: number
}
const PaginationComponent = ({ page, handleChange, total }: Props) => {
    return (
        <Wrapper>
            <Typography color="text.disabled">
                {`Showing ${total === 0 ? 0 : (page - 1) * LIMIT + 1}
        to ${Math.min(page * LIMIT, total)} of ${total} entries`}
            </Typography>
            <Pagination
                color="primary"
                count={Math.ceil(total / LIMIT)}
                page={page}
                shape="rounded"
                variant="text"
                onChange={handleChange}
            />
        </Wrapper>
    )
}

export default PaginationComponent
