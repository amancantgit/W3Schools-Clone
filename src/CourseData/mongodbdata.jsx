import { NavLink, Outlet } from 'react-router-dom'
import MyPagination from '../MyComponent/pagination';

const data = [
    "Introduction to MongoDB",
    "Data Modeling",
    "CRUD Operations",
    "Querying",
    "Indexes",
    "Aggregation Framework",
    "Data Aggregation",
    "Data Replication",
    "Sharding",
    "Transactions",
    "GridFS",
    "Security",
    "Data Backup and Restoration",
    "Performance Optimization",
    "Scaling MongoDB",
    "MongoDB Atlas (Cloud-based MongoDB)",
    "MongoDB Compass (GUI for MongoDB)",
    "MongoDB Shell",
    "MongoDB Drivers",
    "MongoDB Change Streams",
    "MongoDB Stitch",
    "MongoDB Charts",
    "MongoDB Ops Manager",
    "MongoDB Enterprise Advanced"
];


const MongoDBData = () => {
  return (
    <>
  <div style={{height: '97vh',display: 'flex'}}>

      <div id="sidebar">
        <h5 >MongoDB Tutorials</h5>
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

export default MongoDBData;