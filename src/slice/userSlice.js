import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const link = process.env.REACT_APP_BACKEND_URL


const token = localStorage.getItem("token")

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        login: (state, action) => {
            localStorage.setItem("token", action.payload)
            return action.payload
        },
        getUsers: (state, action) => {
            return action.payload
        }
    }
})


export const registerUser = (name, email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${link}/register`, {
            name, email, password
        },
        )
        dispatch(login(data))
        return true;
    } catch (error) {
        console.error(error);
        alert(error.response.data.message)
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${link}/login`, {
            email, password
        }
        )
        dispatch(login(data))
        return true;
    } catch (error) {
        console.error(error);
        alert(error.response.data.message)
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${link}/getUser`, {
            headers: {
                token: token
            }
        }
        )
        dispatch(getUsers(data))
    } catch (error) {
        console.error(error);
    }
}



export const { login, getUsers } = userSlice.actions

export default userSlice.reducer;