import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Read = () => {

    const [readData, setReadData] = useState([])
    const navigateTo = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/v1/crud/read", { withCredentials: true })
            //console.log(response)
            setReadData(response.data.readData)
        }
        fetchData()
    }, [])
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/v1/crud/delete/${id}`)
            alert(response.data.message)
            navigateTo("/")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    return (
        <>
            <div className="container">
                <div className="col-md-2"></div>
                <Link to={"/addNew"}><a className='btn btn-primary my-4'>Add New</a></Link>

                <table className='table table-bordered table-stripped'>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            readData.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.firstName}</td>
                                        <td>{element.lastName}</td>
                                        <td>{element.email}</td>
                                        <td>{element.phone}</td>
                                        <td>
                                            <Link to={`/update/${element._id}`}><a type='button' className="btn btn-info">Edit</a></Link>
                                        </td>
                                        <td>
                                            <a className="btn btn-danger" onClick={(element)=>{handleDelete(element._id)}}>Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-md-2"></div>
        </>
    )
}

export default Read