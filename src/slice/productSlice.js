import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const link = process.env.REACT_APP_BACKEND_URL;

const token = localStorage.getItem("token")

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            return state = state.concat(action.payload)
        },
        getProduct: (state, action) => {
            return action.payload
        },
        deleteProducts: (state, action) => {
            return state = state.filter((s) => s._id !== action.payload)
        }
    }
})


export const createProduct = (title, category, price, quantity, description) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${link}/product/create`, {
            title, category, price, quantity, description
        },
            {
                headers: {
                    token: token
                }
            }
        )
        dispatch(addProduct(data))
        return true
    } catch (error) {
        console.error(error);
    }
}

export const getAllProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${link}/product/get`, {
            headers: {
                token: token
            }
        }
        )
        dispatch(getProduct(data))
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`${link}/product/delete/${id}`, {
            headers: {
                token: token
            }
        }
        )
        alert(data.message)
        dispatch(deleteProducts(id))
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = (id, status) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${link}/product/update`, {
            id,
            status
        }, {
            headers: {
                token: token
            }
        }
        )
        alert(data.message)
        return true
        // dispatch(getProduct(data))
    } catch (error) {
        console.error(error);
    }
}

export const { addProduct, getProduct, deleteProducts } = productSlice.actions

export default productSlice.reducer;