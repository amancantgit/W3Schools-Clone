import { useParams } from "react-router"

function DetailSection({courseDetails}){
    const param = useParams()
    return (
        <>
        {((param.name && param.details) && <>
        <center><h3 className="mt-3">{param.details}</h3></center>
        <hr/>
        <p>{courseDetails[param.name][param.details]["description"]}</p>
        <code>{courseDetails[param.name][param.details]["example"]}</code>
        </>)
        ||
        <>
        <center> <h3 className="mt-3"> Learn Code AnyWhere </h3></center>
        <hr />
        <p>Learn Coding from W4Schools</p>
        <code>
            while(true)
            {`{
                console.log(learning...)
            if(NotLearned)
            continue
            else
            break
        }`}

        </code>
    </>
        }
        </>
    )
}

export default DetailSection;