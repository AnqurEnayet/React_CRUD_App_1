import React from 'react'
import { Button } from '@mui/material'

const Remove = ({ onDelete }) => {
  return (
    <div>
      <Button
        onClick={onDelete}
        variant='outlined'
        sx={{
          borderColor: '#074968',
          fontFamily: 'Times New Roman',
          color: '#074968',
          marginLeft: '10px',
          '&:hover': {
            backgroundColor: '#074968',
            borderColor: '#074968',
            color: 'white'
          }
        }}
      >
        Delete
      </Button>
    </div>
  )
}

export default Remove