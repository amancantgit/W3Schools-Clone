import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination'

const data = [
    "Introduction to .NET",
    "C# Basics",
    "Data Types",
    "Variables",
    "Control Flow and Loops",
    "Object-Oriented Programming in C#",
    "Inheritance",
    "Interfaces",
    "Abstract Classes",
    "Exception Handling",
    "Asynchronous Programming",
    "LINQ",
    "Collections and Data Structures",
    "Events",
    "Delegates",
    "Lambda Expressions",
    "Web Forms",
    "MVC",
    "ASP.NET Core",
    "Entity Framework",
    "ADO.NET",
    "Web Services and APIs",
    "Unit Testing",
    "Dependency Injection",
    "Performance Optimization",
    "Debugging",
    "Profiling",
    "Continuous Integration/Continuous Deployment",
    "Multithreading",
    "Parallel Programming",
    "Networking",
    "Serialization and Deserialization",
    "Deployment and Packaging",
    "Localization and Globalization",
];

const DotNetdata = () => {
    return (
      <>
   <div style={{height: '97vh',display: 'flex' }}>
  
      <div id="sidebar" >
       <h5 >.Net Tutorials</h5>
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
  
  export default DotNetdata