import React, { useState } from 'react'
import Remove from './Remove'
import Update from './Update'
import { Link, Typography, CssBaseline, Container, Box, Button, TextField } from '@mui/material';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';


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
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#BB1414',
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
          </form>
        </div>
      </Box>
      <div>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
            >
              {editIndex === index ? (
                <div>
                  <form onSubmit={() => handleSave(index, inputValue)}>
                    <TextField
                      type='text'
                      value={inputValue}
                      onChange={handleUpdateInput}
                      variant='filled'
                      label='Update Details'
                      sx={{
                        '& .MuiFilledInput-root': {
                          backgroundColor: 'white',
                        },
                        '& .MuiFormLabel-root': {
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
                        '& .MuiFormLabel-root.Mui-focused': {
                          color: '#BB1414',
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
                      Save
                    </Button>
                  </form>

                </div>
              ) : (
                <div>
                  {item}
                  <Remove onDelete={() => handleDelete(index)} />
                  <Update onUpdate={() => handleUpdate(index, item)} />
                </div>

              )}
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default Controller