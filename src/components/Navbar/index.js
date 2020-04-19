import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/writers'>Writers</Link>
        </li>
      </ul>
    </>
  )
}

export default index
