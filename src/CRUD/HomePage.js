import React from 'react'
import { Typography, Link, Button, Box } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
//import '../App.css';
const HomePage = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '20vh',
          textAlign: 'center'
        }}
      >
        <Typography
          variant='h5'
          align='center'
          sx={{ fontFamily: 'Times New Roman', color: '#BB1414' }}
        >
          Welcome To The Task Manager
        </Typography>

      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '40vh',
          textAlign: 'center'
        }}
      >
        <Button
          variant='outlined'
          sx={{
            backgroundColor: '#F34A4A',

            border: '1px solid #F34A4A',
            '&:hover': {
              backgroundColor: 'white',
              borderColor: '#F34A4A',
              color: 'BB1414'
            }
          }}
        >
          <Link
            href="/list"
            sx={{
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              color: 'white',
              '&:hover': {
                color: '#BB1414'
              }
            }}
          >
            Task Manager
          </Link>
        </Button>
      </Box>
    </div>
  )
}

export default HomePage