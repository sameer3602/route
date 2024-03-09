import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    function clickhandler(){
        // move to Home page
        navigate("/dashboard");
    }
    function BackHandler(){
        // for Going Back
        navigate(-1);
    }
  return (
    <div>
        <div>This is Login Page</div>
        <button onClick={clickhandler}>Move to dashboard Page</button>
        <button onClick={BackHandler}>Go Back</button>
    </div>
  );
}

export default Login;