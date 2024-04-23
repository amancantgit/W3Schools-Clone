import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import MyPagination from '../MyComponent/pagination';


const data = [
    "Variables", "Data Types", "Operators", "Control Flow", "Loops", "Functions", "Scope ", "Arrays", "Objects", "JSON ", "Classes ", "Prototype", "Closures", "Callbacks", "Promises", "Async/Await", "Event Handling", "DOM Manipulation", "AJAX ", "Fetch API", "ES Modules","Error Handling", "Regular Expressions", "Template Literals", "Destructuring", "Spread Syntax", "Rest Parameters", "Higher-Order Functions", "Set", "Map", "WeakMap","WeakSet", "Functional Programming Concepts", "Browser Storage", "Web APIs","WebSocket","Service Workers", "Webpack (Module Bundler)", "Debugging Techniques", "Performance Optimization", "Express", "RESTful APIs", "Authentication and Authorization", "Middleware" ];
  

const JavaScriptdata = () => {
  return (
    <>
    <div style={{height: '97vh',display: 'flex' }}>

<div id="sidebar" >
  <h5 >JavaScript Tutorials</h5>
  {data.map((val, index) =>(
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

export default JavaScriptdata;