import React, { useState } from 'react'
import Header from './Header'
import './SignUp.css'
const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    return [email, password]
  }

  console.log(firstName, lastName, email, password)

  console.log(handleLogin())

  return (
    <div className='signup'>
      <Header />
      <div className='signup__container'>
        <div className='signup__line'>-----------------</div>
        <h1 className='signup__header'>REGISTER</h1>
        <div className='signup__line'>-----------------</div>
        <br></br>
        <br></br>
        <br></br>
        <div className='signup__form__container'>
          <form className='signup__form'>
            <label>
              First Name:
              <input
                type='text'
                name='first name'
                value={firstName}
                onChange={handleNameChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type='text'
                name='last name'
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
            <label>
              Email Address:
              <input
                type='text'
                name='email'
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              Password:
              <input
                type='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <input type='submit' value='Submit' onSubmit={() => handleLogin} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
