import { APICore } from '@api/api/apiCore'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { AsyncStateType, RootState, StatusType } from 'main/store/types'
import { LIMIT } from 'main/types/PaginationLimit'
import { TheftCasesServiceConfig } from '../services/config'
import { TheftCaseItem } from '../types/responses/TheftCaseItem'
import { TheftCasesCount } from '../types/responses/TheftCasesCount'
import { TheftCasesList } from '../types/responses/TheftCasesList'

const api = new APICore()

type TeftCasesSliceType = {
    startDateInRange: number | null
    endDateInRange: number | null
    titleSearch: string
    allCases: AsyncStateType<TheftCasesList>
    theftCasesCount: AsyncStateType<TheftCasesCount>
}

const initialState: TeftCasesSliceType = {
    titleSearch: '',
    startDateInRange: null,
    endDateInRange: null,
    allCases: {
        status: 'idle',
        data: null
    },
    theftCasesCount: {
        status: 'idle',
        data: null
    }
}

export const getTeftCasesDetails = createAsyncThunk(
    'getTheftCasesDetails',
    async (params: { id: number }, { rejectWithValue }) => {
        try {
            const response = await api.get(
                TheftCasesServiceConfig.getDataById(params.id),
                {}
            )
            return response.data.bike.stolen_record.created_at
        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }
    }
)

export const getTeftCasesCount = createAsyncThunk(
    'getTheftCasesCount',
    async (params: { query?: string }, { rejectWithValue }) => {
        try {
            const queryParams = {
                location: 'Munich',
                stolenness: 'proximity',
                query: params.query ? params.query : ''
            }
            const response = await api.get(
                TheftCasesServiceConfig.getDataCount,
                queryParams
            )
            return response.data.proximity
        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }
    }
)

export const getAllCases = createAsyncThunk(
    'getAllCases',
    async (
        params: { page: number; query?: string },
        { dispatch, rejectWithValue, getState }
    ) => {
        try {
            const AppState = getState() as RootState
            const titleQuery = AppState.theftCases.theftCasesSlice.titleSearch
            const queryParams = {
                per_page: LIMIT,
                page: params.page,
                location: 'Munich',
                stolenness: 'proximity',
                query: titleQuery
            }
            const response = await api.get(
                TheftCasesServiceConfig.getAll,
                queryParams
            )

            const bikes = response.data.bikes
            const bikeDetailsPromises: Promise<TheftCaseItem>[] = bikes.map(
                async (bike: TheftCaseItem) => {
                    const details = await dispatch(
                        getTeftCasesDetails({ id: bike.id })
                    ).unwrap()
                    return {
                        ...bike,
                        report_date: details
                    }
                }
            )
            const detailedBikes = await Promise.all(bikeDetailsPromises)
            await dispatch(getTeftCasesCount({ query: titleQuery })).unwrap()
            return detailedBikes
        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }
    }
)

export const teftCasesSlice = createSlice({
    name: 'theft-cases',
    initialState,
    reducers: {
        setTitleSearch: (state, action) => {
            state.titleSearch = action.payload
        },
        setDateRange: (state, action) => {
            state.startDateInRange = action.payload[0]
                ? action.payload[0].getTime()
                : null
            state.endDateInRange = action.payload[1]
                ? action.payload[1].getTime()
                : null
        }
    },
    extraReducers: (builder) =>
        builder
            // get all theft cases
            .addCase(getAllCases.pending, (state) => {
                state.allCases.status = 'loading'
            })
            .addCase(getAllCases.fulfilled, (state, action) => {
                state.allCases.status = 'succeeded'
                state.allCases.data = action.payload ?? []
            })
            .addCase(getAllCases.rejected, (state, action) => {
                state.allCases.status = 'failed'
                state.allCases.error = action.payload ?? ''
            })
            .addCase(getTeftCasesCount.fulfilled, (state, action) => {
                state.theftCasesCount.status = 'succeeded'
                state.theftCasesCount.data = action.payload
            })
})

export const selectTitleQuery = (state: RootState): string =>
    state.theftCases.theftCasesSlice.titleQuery

export const selectAllCasesData = (state: RootState) =>
    state.theftCases.theftCasesSlice.allCases.data

export const selectAllCasesStatus = (state: RootState): StatusType =>
    state.theftCases.theftCasesSlice.allCases.status

export const selectAllCasesError = (state: RootState) =>
    state.theftCases.theftCasesSlice.allCases.error

export const selectCasesCount = (state: RootState) =>
    state.theftCases.theftCasesSlice.theftCasesCount.data

export const selectStartDateInRange = (state: RootState) =>
    state.theftCases.theftCasesSlice.startDateInRange

export const selectEndDateInRange = (state: RootState) =>
    state.theftCases.theftCasesSlice.endDateInRange

export const { setTitleSearch, setDateRange } = teftCasesSlice.actions

export const selectFilteredCases = createSelector(
    [selectAllCasesData, selectStartDateInRange, selectEndDateInRange],
    (allCases, startDate, endDate) => {
        if (!startDate || !endDate) return allCases

        return allCases.filter((caseItem: TheftCaseItem) => {
            const dateStolen = caseItem.date_stolen
            return dateStolen >= startDate && dateStolen <= endDate
        })
    }
)
export default teftCasesSlice.reducer
