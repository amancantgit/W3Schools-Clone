import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "Core Concepts",
    "Dependency Injection",
    "Inversion of Control",
    "Spring Boot",
    "Spring MVC",
    "Data JPA",
    "Security",
    "AOP",
    "Transactions",
    "RESTful Web Services",
    "Integration",
    "Batch",
    "Cloud",
    "Testing",
    "Validation",
    "Profiles",
    "Caching",
    "Messaging",
    "WebSockets",
    "Actuator",
    "Admin",
    "CLI",
    "Microservices",
    "Logging",
    "Testing",
    "Security",
    "Docker Integration",
    "MongoDB Integration",
    "MySQL Integration",
    "PostgreSQL Integration",
    "Redis Integration",
    "JWT Authentication",
    "AWS Integration",
    "Azure Integration",
    "GCP Integration",
    "Monitoring",
    "Deployment Strategies"
];



const SpringData = () => {
    return (
      <>
    <div style={{height: '97vh',display: 'flex'}}>
  
        <div id="sidebar">
          <h5 >Sping Tutorials</h5>
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
  
  export default SpringData;