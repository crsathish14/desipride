import StatePage from '@/app/component/statePage/StatePage';
import React from 'react'

const page = ({ params }) => {
  return <>
    <p>Post: {params.state}</p>
  <StatePage state={params.state} />
  </>
}

export default page