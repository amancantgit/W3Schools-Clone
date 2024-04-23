import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function CourseList({courseDetails}){

    let param = useParams()

    return(
        <>
        <div>
            {((param.name)
                &&
                Object.keys(courseDetails[param.name]).map((val, ind)=> (
                    <NavLink className={({isActive}) => isActive ? "activedata" : ""} to={`/courses/${param.name}/${val}`} key={ind}>{val}</NavLink>
                )))
                ||
                Object.keys(courseDetails["C"]).map((val, ind)=> (
                    <NavLink className={({isActive}) => isActive ? "activedata" : ""} to={`/courses/C/${val}`}>{val}</NavLink>
                ))
                }
        </div>
        </>
    )
}

export default CourseList;