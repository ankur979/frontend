import React, { useEffect, useState } from 'react'
import { registerUser } from '../slice/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState("")
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


    const registerHandler = async (e) => {
        let success = false
        e.preventDefault();
        success = await dispatch(registerUser(name, email, password))
        if (success) {
            navigate("/")
        }
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                <form style={{ width: "30vmax", }} className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={registerHandler}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group form-check">
                        <Link to={"/login"}> Login </Link></div>
                    <button type="submit" className="btn btn-primary" onClick={registerHandler}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register