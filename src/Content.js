import React from 'react'

const Content = () => {

    const handleNameChange = () => {

        const names = ['kentin', 'kichi', "Chibi", "Kristine"];
        const int = Math.floor(Math.random () * 4);
        return names[int];
    
    }

    const handleClick = () => {

        window.alert ('You Clicked It!')
    }

    const handleClick2 = (name) => {

      console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {

      console.log(e.target.innerText)
    }


  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Clicked It</button>
        <button onClick={() => handleClick2('Kentin')}>Clicked It</button>
        <button onClick={(e) => handleClick3(e)}>Clicked It</button>
    </main>
  )
}

export default Content