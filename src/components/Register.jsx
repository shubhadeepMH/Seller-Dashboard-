import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [eMail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })

  const registerUser = async () => {
    if (name && eMail && password) {
      //Check this user already have account or not
      let ifRegistered = await fetch('http://localhost:3000/logIn', {
        method: 'post',
        body: JSON.stringify({eMail,password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      ifRegistered=await ifRegistered.json()
      if (ifRegistered.name) {
        console.log(ifRegistered);
        alert('This email already registered')
      } else {
        //Store data to database
        let saveUser = await fetch('http://localhost:3000/register', {
          method: 'post',
          body: JSON.stringify({ name, email: eMail, password }),
          headers: {
            'Content-Type': 'application/json'
          },

        })
        saveUser = await saveUser.json();
        // console.log(saveUser) 
        localStorage.setItem('user', JSON.stringify(saveUser))
        navigate('/')

      }

    } else {
      alert('Please fill all the positions')
      setEmail('')
      setName('')
      setPassword('')
    }

  }
  const toLogIn = () => {
    navigate('/logIn')
  }

  return (
    <div className='register'>
      <h1>Registration</h1>
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
      <input type='Password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button onClick={registerUser}>SUBMIT</button>
      <p className='logInButton'>Already have account !<span onClick={toLogIn}> Log In</span></p>
    </div>
  )
}
