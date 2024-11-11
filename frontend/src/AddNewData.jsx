import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddNewData = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const navigateTo = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/api/v1/crud/create", { firstName, lastName, email, phone }, { withCredentials: true })
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

                    <button type="submit" class="btn btn-primary form-control">Submit</button>
                </form>

                <div className="col-md-2"></div>
            </div>
        </>
    )
}

export default AddNewData