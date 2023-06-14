import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProduct, updateProduct } from '../slice/productSlice'
import "./modal.css"

const Dashboard = () => {
  let product = useSelector((s) => s.product)

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(true);
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch()


  const updateProductHandler = async () => {
    const success = await dispatch(updateProduct(productId, status))
    if (success) {
      dispatch(getAllProduct())
      setIsOpen(false);
    }
  }

  const token = localStorage.getItem("token")
  useEffect(() => {
    dispatch(getAllProduct(token))
  }, [dispatch, token])

  const openModal = (id) => {
    setProductId(id)
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      <div className='container'>
        <h1 style={{ fontSize: "2vmax", fontFamily: "cursive", margin: "1vmax 0" }}>Dashboard</h1>
        <div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {product.map((p) => {
                return (
                  <tr key={p._id}>
                    <th>{p.title}</th>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.category}</td>
                    <td>{p.description}</td>
                    <td>{p.status}</td>
                    <td>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16" style={{ cursor: "pointer" }} onClick={() => openModal(p._id)}>
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" style={{ cursor: "pointer" }} onClick={() => {
                          const confirmed = window.confirm("Are you sure you want to remove this product")
                          if (confirmed) {
                            dispatch(deleteProduct(p._id))
                          }
                        }}>
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="modal-box">
          <div className="model-div">
            <div className="modal-content">
              <h2>Update Status</h2>
              <select name="status" onChange={(e) => { setStatus(e.target.value) }}>
                <option value="">Processing</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivered">Delivered</option>
              </select>
              <div className='modal-button'>
                <button type="button" onClick={closeModal} className="btn btn-warning">Close</button>
                <button type="button" className="btn btn-success" onClick={updateProductHandler}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard