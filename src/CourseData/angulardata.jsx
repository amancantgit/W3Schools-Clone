import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "CLI",
    "Components",
    "Directives",
    "Services",
    "Modules",
    "Templates",
    "Forms",
    "Dependency Injection",
    "Routing",
    "HTTP Client",
    "Pipes",
    "Interceptors",
    "Guards",
    "Animations",
    "Testing",
    "Lifecycle Hooks",
    "Lazy Loading",
    "Internationalization",
    "Accessibility",
    "Security",
    "Performance Optimization",
    "Best Practices",
    "Reactive Forms",
    "Template-driven Forms",
    "Change Detection",
    "Content Projection",
    "ViewChild and ContentChild",
    "NgRx (State Management)",
    "RxJS Observables",
    "RxJS Operators",
    "Custom Validators",
    "Error Handling",
    "HTTP Interceptors",
    "Lazy Loading Modules",
    "Route Resolvers",
    "Route Guards",
    "Router Events",
    "Router Outlet",
    "Component Communication",
    "Data Binding",
    "Event Handling",
    "Input and Output Decorators",];


const AngularData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >Angular Tutorials</h5>
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

export default AngularData;