import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../slice/userSlice'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    })

    const loginHandler = async (e) => {
        let success = false
        e.preventDefault();
        success = await dispatch(loginUser(email, password))
        if (success) {
            navigate("/")
        }
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                <form style={{ width: "30vmax", }} className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={loginHandler}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group form-check">
                        <Link to={"/register"}> Register </Link>
                    </div>
                    <button type="submit" onClick={loginHandler} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Login