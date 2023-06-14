import Nevbar from "./components/Nevbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard.js"
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";



function App() {

  return (
    <BrowserRouter>
      <Nevbar  />
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
