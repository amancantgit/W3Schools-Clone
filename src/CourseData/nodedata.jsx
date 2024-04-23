import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';


const data = [
    "Node.js Basics",
    "NPM",
    "File System Operations",
    "Streams and Buffers",
    "Event Emitters",
    "Asynchronous Programming",
    "Modules",
    "HTTP Server",
    "Express.js",
    "Middleware",
    "Routing",
    "Template Engines",
    "RESTful APIs",
    "Authentication",
    "Authorization",
    "Error Handling",
    "Database Integration",
    "WebSocket Integration",
    "Testing",
    "Logging",
    "Security Best Practices",
    "Caching",
    "Cluster Module",
    "Docker Integration",
    "Deployment Strategies",
    "Serverless Functions",
    "GraphQL Integration",
    "Microservices Architecture"
];

const NodeData = () => {
    return (
      <>
    <div style={{height: '97vh',display: 'flex'}}>
  
        <div id="sidebar">
          <h5 >Node.js Tutorials</h5>
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
  
  export default NodeData;