import { useState } from 'react'
import lang from './assets/db/languages.js'

import './App.css'

function App() {
  
  const [active, setActive] = useState(0)


  return (
    <>
      <header><h1>Learn Web Development</h1></header>

      <div className="container">
        <div className="accordion">

          
          {lang.map((element, index) => (
            <>
              <div className="accordion-item" key={index}>
                <button id={index}>{element.title}</button>
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
