import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LogIn() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let navigate = useNavigate()
  const handleLogIn = async () => {
    // console.log('handleLogIn');
    let result = await fetch('http://localhost:3000/logIn', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    result = await result.json()
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/')
    }else{
      alert('Fill correct details')
        setEmail('');
        setPassword('');
      
    }

  }
  return (
    <div className='logInComponent'>
      <p>Log in Here</p>
      <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
      <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
      <button onClick={handleLogIn}>Log In!</button>
    </div>
  )
}
