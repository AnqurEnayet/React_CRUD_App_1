import React, { useState } from 'react'
import Remove from './Remove'
import Update from './Update'
import { Link, Typography, CssBaseline, Container, Box, Button, TextField } from '@mui/material';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';


const Controller = () => {
  const [inputText, setInputText] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleUpdateInput = (e) => {
    setInputValue(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.trim() !== '') {
      setItems([...items, inputText.trim()])
      setInputText('')
    }
  }

  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => (i !== index))
    setItems(updatedItems)
  }

  const handleUpdate = (index, initialValue) => {
    setEditIndex(index)
    setInputValue(initialValue)
  }

  const handleSave = (index, newValue) => {
    const updatedItems = [...items]
    if (newValue === '') newValue = "Undefined"
    updatedItems[index] = newValue
    setItems(updatedItems)
    setEditIndex(null)
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '10vh',
          marginBottom: '50px',
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
            href="/"
            sx={{
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              color: 'white',
              '&:hover': {
                color: '#BB1414'
              }
            }}
          >
            HomePage
          </Link>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '10vh',
          paddingBottom: '10px',
          textAlign: 'center'
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              type='text'
              value={inputText}
              onChange={handleChange}
              variant='filled'
              label='Task Details'
              sx={{
                '& .MuiFilledInput-root': {
                  backgroundColor: 'white',
                },
                '& .MuiFormLabel-root': {
                  color: '#4E0456',
                },
                '& .MuiFilledInput-underline:before': {
                  borderBottomColor: '#4E0456',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#4E0456',
                },
                '& .MuiFilledInput-root.Mui-focused': {
                  backgroundColor: 'white',
                  '& .MuiFilledInput-underline:after': {
                    borderBottomColor: '#4E0456',
                  },
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#4E0456',
                },
              }}
            />
            <Button
              type="submit"
              variant='outlined'
              sx={{
                borderColor: '#A30606',
                fontFamily: 'Times New Roman',
                color: '#A30606',
                marginLeft: '10px',
                '&:hover': {
                  backgroundColor: '#A30606',
                  borderColor: '#A30606',
                  color: 'white'
                }
              }}
            >
              Add
            </Button>
            </Box>
          </form>
        </div>
      </Box>
      <div>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              {editIndex === index ? (
                <form onSubmit={() => handleSave(index, inputValue)} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <TextField
                    type="text"
                    value={inputValue}
                    onChange={handleUpdateInput}
                    variant="filled"
                    label="Update Details"
                    sx={{
                      '& .MuiFilledInput-root': {
                        backgroundColor: 'white',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#BB1414',
                      },
                      '& .MuiFilledInput-underline:before': {
                        borderBottomColor: '#BB1414',
                      },
                      '& .MuiFilledInput-underline:after': {
                        borderBottomColor: '#BB1414',
                      },
                      '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: 'white',
                        '& .MuiFilledInput-underline:after': {
                          borderBottomColor: '#BB1414',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#BB1414',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      borderColor: '#A30606',
                      fontFamily: 'Times New Roman',
                      color: '#A30606',
                      marginLeft: '10px',
                      '&:hover': {
                        backgroundColor: '#A30606',
                        borderColor: '#A30606',
                        color: 'white',
                      },
                    }}
                  >
                    Save
                  </Button>
                </form>
              ) : (
                <>
                  <Checkbox
                    edge="start"
                  // Add any other checkbox properties you need
                  />
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: '#4E0456',
                          fontFamily: 'Times New Roman',
                          fontSize: '20px', // Adjust the font size as needed
                        }}
                      >
                        {item}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                      <Update onUpdate={() => handleUpdate(index, item)} />
                      <Remove onDelete={() => handleDelete(index)} />
                    </Box>
                  </ListItemSecondaryAction>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default Controller