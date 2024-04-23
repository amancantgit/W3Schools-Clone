import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';


const data =
  ["Introduction", "Editors"," Basic", "Elements", "Attributes", "Headings", "Paragraphs", "Styles", 
  "Formating", "Quotations", "Comments", "Colors", "Links", "Images", "Favicon", "Page Title",
  "Tables", "Lists", "Block & Inline", "Classes", "ID", "IFrames", "JavaScirpt", "File Paths",
  "Head", "Layout", "Responsive", "Semantics", "Style Guide", "Entities", "Symbols", 
 "Charsets", "URL Encode", "XHTML" ];



const HTMLdata = () => {
  return (
    <>      
  <div style={{height: '97vh',display: 'flex' }}>

      <div id="sidebar" >
        <h5 >HTML Tutorials</h5>
        {data.map((val, index) =>(
          <NavLink id="link" className={({isActive}) => {
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

export default HTMLdata;