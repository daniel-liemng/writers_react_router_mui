import React from 'react'

const index = ({ match, id, name, born, deceased, description, image }) => {
  // console.log(match)

  return (
    <>
      <img src={image} alt={name} style={{ maxWidth: '300px' }} />
      <h1>{name}</h1>
      <h3>
        {born} &mdash; {deceased}
      </h3>
      <p>{description}</p>
    </>
  )
}

export default index
