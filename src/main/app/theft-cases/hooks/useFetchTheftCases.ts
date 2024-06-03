import { useAppDispatch } from 'main/store/index'
import { getAllCases } from '../store/theftCasesSlice'
import { useCallback } from 'react'

const useFetchTheftCases = (page: number) => {
    const dispatch = useAppDispatch()

    const fetchTheftCases = useCallback(() => {
        dispatch(getAllCases({ page }))
    }, [dispatch, page])

    return fetchTheftCases
}

export default useFetchTheftCases
