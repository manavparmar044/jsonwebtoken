import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {
            name, email, password
        })
        .then(res=>{
            console.log(res)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 w-25">
            <h2>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter name' autoComplete='off' name='name' className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success'>Register</button>
            </form>
            <p>Already have an account?</p>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</button>
        </div>
    </div>
  )
}

export default Registration