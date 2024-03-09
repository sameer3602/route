import React from 'react'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate= useNavigate();
    function clickhandler(){
        // move to Home page
        navigate("/login");
    }
    function BackHandler(){
        // for Going Back
        navigate(-1);
    }
  return (
    <div>
        <div>This is Dashboard Page</div>
        <button onClick={clickhandler}>Move to Login Page</button>
        <button onClick={BackHandler}>Go Back</button>
    </div>
  );
}

export default Dashboard;