import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from '../assets/404.png'

const NotFound = () => {
  return (
    <>
    <br/>
    <div style={{textAlign: 'center'}}>
        {/* <h3>Page Not Found</h3> */}

        <div>
          <img src={logo2} alt="sorry" height="250px"/>
        </div>

        <br/>
        <p style={{fontSize: '25px', color: 'grey'}}>When you’re lost, it’s always a good idea to go back home</p>

        <div style={{display:'flex', justifyContent: 'center', height: '40px'}}>

          <Link to='/Java/Introduction to Java' style={{display: 'flex', justifyContent: "center", paddingTop: '4px', width: '250px', textDecoration: 'none', backgroundColor: '#192070', color: 'white',borderRadius: "5px", fontSize: '1.2rem'}}>
            Take me home
          </Link> 
          
        </div>
   
    </div>
    </>
  )
}

export default NotFound;