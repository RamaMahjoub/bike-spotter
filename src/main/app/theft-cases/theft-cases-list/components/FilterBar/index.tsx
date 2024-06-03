import DatePickerWrapper from '@core/styles/libs/react-datepicker'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import useFetchTheftCases from 'main/app/theft-cases/hooks/useFetchTheftCases'
import {
    selectEndDateInRange,
    selectStartDateInRange,
    selectTitleQuery,
    setDateRange,
    setTitleSearch
} from 'main/app/theft-cases/store/theftCasesSlice'
import { useAppDispatch, useAppSelector } from 'main/store/index'
import { ChangeEvent } from 'react'
import DatePicker from 'react-datepicker'

const FilterBar = () => {
    const dispatch = useAppDispatch()
    const titleQuery = useAppSelector(selectTitleQuery)
    const fetchTheftCases = useFetchTheftCases(1)
    const startDate = useAppSelector(selectStartDateInRange)
    const endDate = useAppSelector(selectEndDateInRange)
    const handleTitleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitleSearch(event.target.value))
    }

    return (
        <DatePickerWrapper>
            <Grid
                container
                columnSpacing={3}
                rowSpacing={4}
            >
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    <DatePicker
                        withPortal
                        autoComplete="off"
                        customInput={<TextField fullWidth />}
                        dateFormat="d/MM/YYYY"
                        endDate={endDate ? new Date(endDate) : null}
                        placeholderText="Filter this page by range"
                        selectsRange={true}
                        startDate={startDate ? new Date(startDate) : null}
                        onChange={(update) => {
                            dispatch(setDateRange(update))
                        }}
                    />
                </Grid>
                <Grid
                    item
                    md={7}
                    xs={9}
                >
                    <TextField
                        fullWidth
                        autoComplete="off"
                        placeholder="Search bike title"
                        value={titleQuery}
                        onChange={handleTitleQueryChange}
                    />
                </Grid>
                <Grid
                    item
                    md={1}
                    xs={3}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={fetchTheftCases}
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default FilterBar
