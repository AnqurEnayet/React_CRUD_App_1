import React from 'react'
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to="/list">Go to To-do List</Link>
    </div>
  )
}

export default HomePage