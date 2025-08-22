import React from 'react'

const userDetails = ({params}: {params: {id: string}}) => {
    const { id } = params;
  return (
    <div>
      <h1>User {id} details</h1>
    </div>
  )
}

export default userDetails
