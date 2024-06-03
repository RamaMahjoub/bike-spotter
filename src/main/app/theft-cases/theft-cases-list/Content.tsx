import { usePagination } from '@core/hooks'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import { useAppSelector } from 'main/store/index'
import { useCallback, useEffect } from 'react'
import PaginationComponent from '../../components/Pagination'
import useFetchTheftCases from '../hooks/useFetchTheftCases'
import {
    selectAllCasesStatus,
    selectCasesCount,
    selectFilteredCases
} from '../store/theftCasesSlice'
import { TheftCaseItem } from '../types/responses/TheftCaseItem'
import CaseItem from './components/CaseItem'
import FilterBar from './components/FilterBar'

const Content = () => {
    const { page, handlePageChange } = usePagination()
    const total = useAppSelector(selectCasesCount)
    const fetchTheftCases = useFetchTheftCases(page)
    const cases = useAppSelector(selectFilteredCases)
    const fetchTheftCasesStatus = useAppSelector(selectAllCasesStatus)

    useEffect(() => {
        fetchTheftCases()
    }, [fetchTheftCases])

    const renderCaseItem = useCallback((caseItem: TheftCaseItem) => {
        return (
            <CaseItem
                key={caseItem.id}
                caseItem={caseItem}
            />
        )
    }, [])

    return (
        <Stack gap={4}>
            <FilterBar />
            <List>
                {fetchTheftCasesStatus === 'loading' ? (
                    <CircularProgress
                        color="secondary"
                        size={20}
                    />
                ) : fetchTheftCasesStatus === 'idle' ? (
                    []
                ) : (
                    cases.map((bike: TheftCaseItem) =>
                        renderCaseItem(bike)
                    )
                )}
            </List>
            <PaginationComponent
                handleChange={handlePageChange}
                page={page}
                total={total || 0}
            />
        </Stack>
    )
}

export default Content
