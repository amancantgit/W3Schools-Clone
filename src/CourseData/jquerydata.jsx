import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "Selectors", 
    "DOM Manipulation", 
    "Event Handling", 
    "Effects and Animations", 
    "AJAX Requests", 
    "Deferred Objects", 
    "Promises", 
    "Utilities", 
    "Plugins", 
    "jQuery UI", 
    "Performance Optimization", 
    "Error Handling", 
    "Browser Compatibility", 
    "Best Practices",
    "Chaining",
    "Traversal",
    "Forms Handling",
    "Data Attributes",
    "Filtering",
    "Content Manipulation",
    "Dimensions",
    "Attributes Manipulation",
    "CSS Manipulation",
    "AJAX Events",
    "AJAX Utilities",
    "Cross-Domain Requests",
    "JSONP",
    "AJAX Queue",
    "Prefiltering"
];

const JQueryData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >jQuery Tutorials</h5>
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

export default JQueryData;