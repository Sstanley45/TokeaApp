import React, { useContext, useState } from 'react'
import Logo from '../components/Logo'
import { PriceContext } from '../contexts/appContext'
import Alert from '../components/Alert'
import FormRow from '../components/FormRow'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'


const Register = () => {
  const navigate = useNavigate()  
    const {
      showAlert,
      registerUser,
      loginUser,
      user,
      emptyValuesAlert,
    } = useContext(PriceContext);
     const [ values, setValues ] = useState({
        userName: '',
        password: '',
        isMember: false
     })
    
    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 
        setValues({...values, [name] : value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      const {userName, password} = values
        if (!userName || !password) {
            emptyValuesAlert();
            return
        }
      const currentUser = { userName, password }
      if (values.isMember) { 
        registerUser(currentUser)
      }
      else {
        loginUser(currentUser) 
      }
    }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/landing')
      }, 3000)
    }
  },[user, navigate])
    
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3 className="login-register-form">
          {values.isMember ? "REGISTER" : "LOGIN"}
        </h3>
        
        {showAlert && <Alert />}

        <FormRow
          type="userName"
          name="userName"
          labelText="User Name"
          value={values.userName}
          placeholder="User-name"
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          labelText="Password"
          value={values.password}   
          placeholder="Enter-password"
          handleChange={handleChange}
        />
        <button className="form-submit-btn" type="submit">
          submit
        </button>
        <p>
          {values.isMember ? "Already a member ? " : "Not yet a Member ? "}
          <button
            type="button"
            className="register-btn-form"
            onClick={() => {
              setValues({ ...values, isMember: !values.isMember });
            }}
          >
            {values.isMember ? "login" : "register"}
          </button>
        </p>
      </form>
    </>
  );
}

export default Register