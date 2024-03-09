import React from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    function clickhandler(){
        // move to Home page
        navigate("/");
    }
    function BackHandler(){
        // for Going Back
        navigate(-1);
    }
  return (
    <div>
        <div>This is Signup Page</div>
        <button onClick={clickhandler}>Move to Home Page</button>
        <button onClick={BackHandler}>Go Back</button>
    </div>

  );
}

export default Signup;