import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const javaTutorials = [
  "Introduction to Java", "Syntax", "Variables", "Data Types", "Type Casting", "Operators", "Arrays", "Methods", 
  "Overloading", "Overriding", "Scope", "Recursion", "Classes", "Modifier", 
  "Packages / API", "Interface", "Constructor", "Type Casting", "Encapsulation", "Inheritance", 
  "Polymorphism", "Abstraction", "Enum", "File Handling", "ArrayList", "LinkedList", "Iterator", 
  "HashMap", "HashSet", "Exceptions" ];


const Javadata = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >Java Tutorials</h5>
        {javaTutorials.map((val, index) =>(
          <NavLink id='link' className={({isActive}) => {
            console.log({isActive})
            return isActive ? "activedata" : "";
          }}  to = {val}>{val}</NavLink>
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

export default Javadata;