import React from 'react'

const page = ({ params }) => {
    console.log("jdkjcnskjcn")
    return <>
        <p>Post: {params.state}{params.category}</p>
    </>
}

export default page