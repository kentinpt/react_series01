// import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({items, handleCheck, handleDelete}) => {
    
    // const [count, setCount] = useState(0)


    
    // const handleNameChange = () => {

    //     const names = ['kentin', 'kichi', "Chibi", "Kristine"];
    //     const int = Math.floor(Math.random () * 4);
    //     setName(names[int]);
    
    // }

    // const handleClick = () => {
    //   setCount(count + 1)
    //   setCount(count + 1)
    //   console.log(count)
    // }

    // const handleClick2 = () => {

    //   console.log(count)
    // }

  return (
    <main>
        {/* <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Clicked It</button>
        <button onClick={handleClick2}>Clicked It</button> */}
        
        {items.length ? (
          <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
                <input 
                    type="checkbox" 
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                />
                <label
                  style={(item.checked) ? { textDecoration:
                  'line-through' }: null}
                  onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)} 
                    role='button' 
                    tabIndex='0'
                />
            </li>
  
          ))}
        </ul>

        ) : (
          <p style={{ marginTop: '2rem'}}
          >Your list is empty.</p>
        ) }
      

    </main>
  )
}

export default Content