import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Register.css';
import { Input } from 'antd';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName.length < 5) {
      alert("First name must be at least 5 characters");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    // Additional logic for form submission goes here
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'Firstname') {
      setFirstName(value);
    } else if (name === 'Lastname') {
      setLastName(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  return (
    <center>
      <div className="box">
        <div className="container">
          <div className="top">
            <header>Register</header>
          </div>
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Firstname"
                name="Firstname"
                value={firstName}
                onChange={changeHandler}
              />
              <i className="bx bx-user"></i>
            </div>
            <br />
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Lastname"
                name="Lastname"
                value={lastName}
                onChange={changeHandler}
              />
              <i className="bx bx-user"></i>
            </div>
            <br />
            <div className="input-field">
              <Input.Password
                className="input"
                placeholder="Password"
                name="password"
                value={password}
                onChange={changeHandler}
              />
              
            </div>
            <br />
            <div className="input-field">
              <Input.Password
                className="input"
                placeholder="Re-enter Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
              />
              {password !== confirmPassword && (
                <p>Passwords do not match</p>
              )}
             
            </div>
            <br />
            <div className="input-field">
              <Button type="submit" name="submit">
                Submit
              </Button>
            </div>
          </form>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check"> Remember Me</label>
            </div>
           
          </div>
          <span>
            <p>Already a user</p>
            <a href="login">Login</a>
          </span>
        </div>
      </div>
    </center>
  );
}

export default Register;
