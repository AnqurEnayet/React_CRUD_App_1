import React from 'react'
import { Button } from '@mui/material'

const Update = ({ onUpdate }) => {
  return (
    <div>
      <Button onClick={onUpdate}
        variant='outlined'
        sx={{
          borderColor: '#4E0456',
          fontFamily: 'Times New Roman',
          color: '#4E0456',
          marginLeft: '10px',
          '&:hover': {
            backgroundColor: '#4E0456',
            borderColor: '#4E0456',
            color: 'white'
          }
        }}
      >
        Update
      </Button>
    </div>
  )
}

export default Update