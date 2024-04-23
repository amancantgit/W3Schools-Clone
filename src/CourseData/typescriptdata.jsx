import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination'


const data = [
    "Introduction to TypeScript",
    "Type Annotations",
    "Basic Types",
    "Interfaces",
    "Classes",
    "Inheritance",
    "Access Modifiers",
    "Generics",
    "Type Inference",
    "Type Guards",
    "Enums",
    "Tuple Types",
    "Literal Types",
    "Type Assertions",
    "Modules ",
    "Namespaces",
    "Decorators",
    "Continuous Integration/Continuous Deployment",
    "Mixins",
    "TypeScript Configuration",
    "Advanced Types",
    "Utility Types",
    "Declaration Merging",
    "Error Handling",
    "Debugging",
    "Code Formatting",
    "Optimizing",
    "Design Patterns",
  ];
  

const TypeScriptdata = () => {
  return (
    <>
 <div style={{height: '97vh',display: 'flex' }}>

    <div id="sidebar" >
     <h5 >TypeScript Tutorials</h5>
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

export default TypeScriptdata