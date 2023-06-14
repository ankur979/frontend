import Nevbar from "./components/Nevbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard.js"
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import { getUser } from "./slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.user)
  useEffect(() => {
    dispatch(getUser())
    // eslint-disable-next-line
  },[])
  return (
    <BrowserRouter>
      <Nevbar user={userData} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
