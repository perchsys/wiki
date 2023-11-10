import Spline from '@splinetool/react-spline';
import { Button } from 'react-bootstrap';
import '../styles/Register.css'
import React, { useState } from 'react';
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const submitHandler = (e) => {
      e.preventDefault();
      if (username.length < 9) {
        alert("Please enter a valid gmail address")
      } else if(password.length < 8){
        alert("password length should atlest 8")
      }
      // Additional logic for form submission goes here
    };
  
    const changeHandler = (e) => {
      const { name, value } = e.target;
      if (username === 'e-mail') {
        setUsername(value);
      }  else if (name === 'password') {
        setPassword(value);
      } 
    };
  
    const handleLogin = () => {
      // Perform the login functionality here, such as making an API call
      // to validate the credentials and redirect the user accordingly.
  
      if (type === 'Admin') {
        window.location.href ='Userhandle';
      } else if (type === 'User') {
        window.location.href ='user';
      } else if (type === 'Lead') {
        window.location.href ='Lead';
      } else if (type === 'Coardinator') {
        window.location.href ='Coardinator';
      }
    };
  return (
    <div>
      <Spline scene="https://prod.spline.design/hW8H7gyxSvZvt5EX/scene.splinecode" />
<center>
<body>

   <div class="box">
    
    <div class="container">

   
    <div>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Lead">Lead</option>
          <option value="Coardinator">Coardinator</option>
        </select>
      </label>
      <br />
     
    
        <div class="top">
          <header>Login</header>
         
      </div><br/>
        <form  autoComplete="off" onSubmit={submitHandler}>
        <div class="input-field">
           <input type='text' name='username' class='input' placeholder='username' onChange={changeHandler} />
            <i class='bx bx-user' ></i>
        </div><br/>
        <div class="input-field">
            <input type="Password" class="input" name='password'  placeholder="Password" value={password} onChange={changeHandler}/>
            <i class='bx bx-lock-alt'></i>
        </div><br/>
        <div class="input-field" href='/'>
         <Button onClick={handleLogin} type="submit" name="submit">login</Button>
        </div>
        </form>
        </div>
        
        <div class="two-col">
            <div class="one">
               <input type="checkbox" name="" id="check"/>
               <label for="check">Remember Me</label>
            </div>
            <div class="two">
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
       <div> <span> <p>Dont have an account</p> <a href='Register'>Register</a></span></div>
    </div>
   
</div>  
</body>
</center>
</div>
  );
}

export default LoginPage;
