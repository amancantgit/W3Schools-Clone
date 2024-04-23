import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = ["Syntax","Comments","Variables", "Scope","Echo", "Data Types", "Strings", 
    "Escape Characters", "Casting", "Operators",  "Nested if","Switch", "Loops", "While Loop", "Do While Loop", "For Loop", "Foreach Loop", "Break", "Continue", "Functions", "Arrays" ]


    const PHPdata = () => {
        return (
          <>      
        <div style={{height: '97vh',display: 'flex' }}>
      
            <div id="sidebar" >
              <h5>PHP Tutorials</h5>
              {data.map((val, index) =>(
                <NavLink id='link' className={({isActive}) => {
                  console.log({isActive})
                  return isActive ? "activedata" : "";
                }} to = {val}>{val}</NavLink>
                ))}
            </div>
      
            <div id='data-outlet' >
              <Outlet/>

              <MyPagination/>
            </div>
        </div>
        
             
          </>
        )
      }
      
      export default PHPdata;