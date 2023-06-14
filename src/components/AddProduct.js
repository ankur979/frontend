import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { createProduct } from '../slice/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const success = dispatch(createProduct(title, category, Number(price), Number(quantity), description))
        if (success) {
            navigate("/")
        }
    }
    return (
        <div className="container m-5">
            <div className="d-flex justify-content-center align-items-center">
                <form style={{ width: "30vmax", }} onSubmit={submitHandler}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <input type="text" value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <input type="text" value={category} placeholder="category" onChange={(e) => setCategory(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <input type="number" value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <input type="number" value={quantity} placeholder='quantity' onChange={(e) => setQuantity(e.target.value)} className="form-control" id="exampleCheck1" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct