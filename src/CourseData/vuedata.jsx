import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
  "Vue Instance",
  "Components",
  "Props",
  "Custom Events",
  "Computed Properties",
  "Watchers",
  "Vue Router",
  "Vuex (State Management)",
  "Lifecycle Hooks",
  "Directives",
  "Filters",
  "Mixins",
  "Render Functions",
  "Slots",
  "Dynamic Components",
  "Reactivity",
  "Forms Handling",
  "Server-Side Rendering",
  "Unit Testing",
  "Vue CLI",
  "Single File Components",
  "Global Event Bus",
  "Axios Integration",
  "Authentication",
  "Authorization",
  "Accessibility",
  "Error Handling",
  "TypeScript Integration"
];



const VueData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >Vue Tutorials</h5>
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

export default VueData;