import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { getUser } from "../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Nevbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((s) => s.user)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])



    useEffect(() => {
        const token = localStorage.getItem("token")
        dispatch(getUser(token))
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addProduct">AddProduct</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {`Hello ${!user ? "" : user.name}!`}
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nevbar