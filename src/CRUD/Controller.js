import React, { useState } from 'react'
import Remove from './Remove'
import Update from './Update'

const Controller = () => {
    const [inputText, setInputText] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [items, setItems] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleChange =(e)=> {
        setInputText(e.target.value)
    }

    const handleUpdateInput =(e)=> {
      setInputValue(e.target.value)
    }


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(inputText.trim() !== ''){
            setItems([...items, inputText.trim()])
            setInputText('')
        }
    }

    const handleDelete =(index)=> {
      const updatedItems = items.filter((item,i)=> (i!== index))
      setItems(updatedItems)
    }

    const handleUpdate =(index, initialValue)=> {
      setEditIndex(index)
      setInputValue(initialValue)
    }

    const handleSave =(index, newValue)=> {
      const updatedItems = [...items]
      if(newValue==='') newValue="Undefined"
      updatedItems[index] = newValue
      setItems(updatedItems)
      setEditIndex(null)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li 
          key={index}
          >
            {editIndex===index ? (
            <div>
              <form onSubmit={()=>handleSave(index, inputValue)}>
              <input
                type='text'
                value={inputValue}
                onChange={handleUpdateInput}
              />
              <button type='submit'>Save</button>
              </form>
              
            </div>
        ) : (
          <div>
            {item} 
          <Remove onDelete={()=>handleDelete(index)}/>
          <Update onUpdate={()=>handleUpdate(index, item)}/>
          </div>
          
        )}
         </li>   
          
        ))}
      </ul>
    </div>
  )
}

export default Controller