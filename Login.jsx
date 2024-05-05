import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleHideShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form className='form'>
        <p>Welcome to the Dashboard</p>
        <br />
        <label>Email: </label><br />
        <input className='Input' type="email" placeholder='abc@gmail.com' /><br />
        <label>Password: </label><br />
        <input className='Input'
          type={showPassword ? "text" : "password"}
          placeholder='****************'
        /><br /><br />
        
        <span onClick={handleHideShow} className="icon" style={{width: "10vh",fontSize:"2.9vh",color:"grey",cursor: "pointer",marginTop:"-71px",marginLeft:"49%"}}>
          {showPassword ? 
            <FontAwesomeIcon icon={faEyeSlash} /> : 
            <FontAwesomeIcon icon={faEye} />
          }
        </span>
        <br /><br />
        <button className='button' type='button'>login <span style={{ fontSize: "28px" }}>→</span></button>
      </form>
    </>
  );
};

export default Login;
