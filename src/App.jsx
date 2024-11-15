import { useState } from 'react'
import lang from './assets/db/languages.js'

import './App.css'

function App() {
  
  const [active, setActive] = useState(0)

  function handleClick(e) {
    const newActive = e.target.getAttribute('data-index')
    console.log(newActive);
    

    setActive(newActive)
  }


  return (
    <>
      <header><h1>Learn Web Development</h1></header>

      <div className="container">
        <div className="accordion">

          
          {lang.map((element, index) => (
            <>
              <div className={`accordion-item ${active == index ? 'active' : 'hide'}`}  key={index}>
                <button data-index={index} onClick={handleClick}>{element.title}</button>
                <p>{element.description}</p>
              </div>
            </>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default App
