import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit Button clicked')
    // const response = await fetch(`http://localhost:3001/api/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',

    //   },
    //   body: JSON.stringify({ email: credentials.email, password: credentials.password })
    // })inotes-brown.vercel.app

    try {
       await axios.post('http://inotes-brown.vercel.app/api/auth/login/', {
        email: credentials.email, password: credentials.password
      })
        .then((response) => {
          console.log(response.data.success)
          // console.log(json);
          if (response.data.success) {
            localStorage.setItem('authtoken', response.data.authtoken);
            navigate('/');
            props.showAlert('success','Logged in Successfully')
          }
          else
            props.showAlert('danger','Please enter correct credentials')
        })
        .catch(function (error) {
          
          props.showAlert('danger','Please enter correct credentials')  
          console.log(error);
        })
      // console.log(json);
      // if(json.success){
      //   localStorage.setItem('authtoken',json.authtoken);
      //   navigate('/');
      // }
      // else
      // alert('Please enter correct credentials')
    }
    catch (e) {
      console.log('error: ', e.message)
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
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="email" placeholder='example@mail.com' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder='Password must be atleast 5 characters long' onChange={onChange} value={credentials.password} id="password" />
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  )
}

export default Login
