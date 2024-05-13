import React from 'react'

const Remove = ({onDelete}) => {
  return (
    <div>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Remove