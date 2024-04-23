import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "JSX",
    "Components",
    "Props",
    "State",
    "Lifecycle Methods",
    "Hooks",
    "React Router",
    "Redux (State Management)",
    "Context API",
    "Forms",
    "Events",
    "Refs",
    "Keys",
    "Error Boundaries",
    "Higher-Order Components",
    "Render Props",
    "Code Splitting",
    "Lazy Loading",
    "Unit Testing",
    "Accessibility",
    "CSS-in-JS",
    "Server-Side Rendering",
    "Virtual DOM",
    "PropTypes",
    "TypeScript Integration",
    "Next.js",
    "Styled Components",
    "React Testing Library",
    "GraphQL Integration"
];

const ReactData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >React Tutorials</h5>
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

export default ReactData;