import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const url = "https://66a4471a44aa63704583b1e0.mockapi.io/Student"

const fetchAPI = async () => {
    const res = axios({
        method: 'get',
        url: url    
    })

    return res.data
}

export const fetchAPIAsync =  createAsyncThunk(fetchAPI)


const studentSlice = createSlice({
    name: 'student',
    initialState: {
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase()
    }
})

export default studentSlice.reducer