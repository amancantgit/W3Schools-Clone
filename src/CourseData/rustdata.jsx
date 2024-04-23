import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "Enums",
    "Pattern Matching",
    "Structs",
    "Traits",
    "Generics",
    "Concurrency",
    "Asynchronous Programming",
    "Error Handling",
    "Iterators and Iteration",
    "Closures",
    "Modules and Crates",
    "Cargo",
    "Unsafe Rust",
    "Futures and Streams",
    "Testing",
    "Documentation",
    "Macros",
    "Pattern Macros",
    "Standard Library",
    "Collections",
    "File I/O",
    "Networking",
    "Web Development",
    "GUI Development",
    "Embedded Development",
    "Game Development",
    "System Programming",
    "Cross-Platform Development",
    "Performance Optimization",
    "Debugging",
    "Error Handling",
    "Memory Management",
    "Concurrency and Parallelism",
    "Tooling",
    "Learning Resources"
];


const RustData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >Rust Tutorials</h5>
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

export default RustData;