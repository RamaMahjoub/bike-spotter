import { ChangeEvent, useCallback, useState } from 'react'

const usePagination = () => {
    const [page, setPage] = useState(1)
    const handlePageChange = useCallback(
        (_event: ChangeEvent<unknown>, page: number) => {
            setPage(page)
        },
        []
    )

    return {
        page,
        handlePageChange
    }
}

export default usePagination
