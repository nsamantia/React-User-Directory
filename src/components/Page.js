import React from 'react'

const Page = (props) => {
    // console.log(props)
    // const handleClick= () => {
        
    // }

    return (
        <div>
            {/* <p>{props.name}</p> */}
            <p>City:{props.city}</p>
            <p>Country:{props.country}</p>
            <p>Employer:{props.employer}</p>
            <p>Title:{props.title}</p>
            <p></p>
        </div>
    )
}

export default Page