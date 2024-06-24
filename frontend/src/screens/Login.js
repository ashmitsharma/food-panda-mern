import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  let navigate = useNavigate()

  async function handleSubmit(e) {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem("authToken", json.authToken)
      navigate("/")
      // alert("Login Successful")
    }

  }

  function onChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}></input>
          </div>
          <button type="submit" className="btn btn-primary">LogIn</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>Don't have a Account? SignUp</Link>
        </form>
      </div>
    </div>
  )
}

export default Login