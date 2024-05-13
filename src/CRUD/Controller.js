import React, { useState } from 'react'
import Remove from './Remove'

const Controller = () => {
    const [inputText, setInputText] = useState('')
    const [items, setItems] = useState([])

    const handleChange =(e)=> {
        setInputText(e.target.value)
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
          key={index}>{item} <Remove onDelete={()=>handleDelete(index)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Controller