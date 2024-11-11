import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
const UpdateData = () => {
    const { id } = useParams();
    //const [single, setSingle] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const navigateTo = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/crud/single/${id}`, { withCredentials: true })
                const { firstName, lastName, email, phone } = response.data.single;
                setFirstName(firstName); // Set first name
                setLastName(lastName); // Set last name
                setEmail(email); // Set email
                setPhone(phone); // Set phone
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/crud/update/${id}`, { firstName, lastName, email, phone }, { withCredentials: true })
            alert(response.data.message)
            navigateTo("/")
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="col-md-2"></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='Enter Your FirstName' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder='Enter Your LastName' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='Enter Your Phone' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" class="btn btn-primary form-control">Update</button>
                </form>
                <div className="col-md-2"></div>
            </div>
        </>
    )
}

export default UpdateData