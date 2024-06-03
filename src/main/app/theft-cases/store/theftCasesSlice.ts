import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APICore } from '@api/api/apiCore'
import { AsyncStateType, RootState, StatusType } from 'main/store/types'
import { LIMIT } from 'main/types/PaginationLimit'
import { TheftCasesServiceConfig } from '../services/config'
import { TheftCasesCount } from '../types/responses/TheftCasesCount'
import { TheftCasesList } from '../types/responses/TheftCasesList'

const api = new APICore()

type TeftCasesSliceType = {
    titleSearch: string
    allCases: AsyncStateType<TheftCasesList>
    theftCasesCount: AsyncStateType<TheftCasesCount>
}

const initialState: TeftCasesSliceType = {
    titleSearch: '',
    allCases: {
        status: 'idle',
        data: null
    },
    theftCasesCount: {
        status: 'idle',
        data: null
    }
}

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
        } catch (e) {
            rejectWithValue(e)
            console.log('erorr')
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
            //to do fetch report date from api
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
            await dispatch(getTeftCasesCount({ query: titleQuery }))
            return response.data
        } catch (e) {
            rejectWithValue(e)
            console.log('erorr')
        }
    }
)

export const teftCasesSlice = createSlice({
    name: 'theft-cases',
    initialState,
    reducers: {
        setTitleSearch: (state, action) => {
            state.titleSearch = action.payload
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
                state.allCases.data = action.payload
            })
            .addCase(getAllCases.rejected, (state) => {
                state.allCases.status = 'failed'
            })
            // get cases count
            .addCase(getTeftCasesCount.pending, (state) => {
                state.theftCasesCount.status = 'loading'
            })
            .addCase(getTeftCasesCount.fulfilled, (state, action) => {
                state.theftCasesCount.status = 'succeeded'
                state.theftCasesCount.data = action.payload
            })
            .addCase(getTeftCasesCount.rejected, (state) => {
                state.theftCasesCount.status = 'failed'
            })
})

export const selectTitleQuery = (state: RootState): string =>
    state.theftCases.theftCasesSlice.titleQuery

export const selectAllCasesData = (state: RootState) =>
    state.theftCases.theftCasesSlice.allCases.data

export const selectAllCasesStatus = (state: RootState): StatusType =>
    state.theftCases.theftCasesSlice.allCases.status

export const selectCasesCount = (state: RootState) =>
    state.theftCases.theftCasesSlice.theftCasesCount.data

export const selectCasesCountStatus = (state: RootState): StatusType =>
    state.theftCases.theftCasesSlice.theftCasesCount.status

export const { setTitleSearch } = teftCasesSlice.actions

export default teftCasesSlice.reducer
