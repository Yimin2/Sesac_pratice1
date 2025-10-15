import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const SUPABASE_URL = "https://jfsjmxtokcazzpykrxwp.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmc2pteHRva2NhenpweWtyeHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDE4NjksImV4cCI6MjA3NTc3Nzg2OX0.n-IAryEgUti5atr30MGszQ-fzStuW3BZDRMuaPPIefw"

const signup = createAsyncThunk("auth/signup", async (data, {rejectWithValue}) => {
    try {
        const config = {
            url: `${SUPABASE_URL}/auth/v1/signup`, method: "POST", headers: {
                "Content-type": "application/json", apikey: SUPABASE_ANON_KEY,
            }, data: {
                email: data.email, password: data.password
            },
        };
        const response = await axios(config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }

})
const login = createAsyncThunk("auth/login", async (data, {rejectWithValue}) => {
    try {
        const config = {
            url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`, method: "POST", headers: {
                "Content-type": "application/json", apikey: SUPABASE_ANON_KEY,
            }, data: {
                email: data.email, password: data.password,
            }
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
const initialState = {
    token: null, error: null, isSignup: false,
}
const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        resetIsSignup: (state) => {
            state.isSignup = false;
        }
    }, extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state) => {
            state.isSignup = true;
        }).addCase(signup.rejected, (state, action) => {
            state.error = action.payload
        }).addCase(login.fulfilled, (state, action) => {
            state.token = action.payload["access_token"]
        }).addCase(login.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export const {resetIsSignup} = authSlice.actions
export default authSlice.reducer
export {signup, login}