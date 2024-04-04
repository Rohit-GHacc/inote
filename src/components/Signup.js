import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = (props) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '',name:'' ,cpassword: ''})
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit Button clicked')
    try {
      await axios.post('http://inotes-brown.vercel.app/api/auth/createuser/', {
        email: credentials.email, password: credentials.password, name:credentials.name, cpassword: credentials.cpassword
      })
        .then((response) => {
          console.log(response.data)
          // console.log(json);
          if (response.data.success) {
            localStorage.setItem('authtoken', response.data.authtoken);
            navigate('/');
            props.showAlert('success','Account created successfully')
          }
          
        })
      .catch(function (error) {
        console.log(error);
        props.showAlert('danger',`Passwords didn't match`)
        })
    }
    catch (e) {
      console.log('error: ', e)
    }
  }
  // const onChange = ()=>{
  //   setCredentials({email,password})
  // }
  const onChange = (e) => {
    e.preventDefault()
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container my-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChange} aria-describedby="emailHelp" placeholder='Enter your name'/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="email" onChange={onChange} required aria-describedby="emailHelp" placeholder='example@mail.com'/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={onChange} minLength={5}  required  id="password" placeholder='Password must be atleast 5 characters long'/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" onChange={onChange} minLength={5} required id="password" placeholder='Both passwords should be same' />
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  )
}

export default Signup
