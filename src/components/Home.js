import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
    function clickhandler(){
        // move to Home page
        navigate("/signup");
    }
    function BackHandler(){
        // for Going Back
        navigate(-1);
    }
  return (
    <div>
        <div>This is Home Page</div>
        <button onClick={clickhandler}>Move to Signup Page</button>
        <button onClick={BackHandler}>Go Back</button>
    </div>
  );
}

export default Home;