import React from 'react'
import sampleJSON from './sample.json'
import { useState, useEffect } from 'react'
import Elements from './components/Elements'


function App() {
  const [elements, setElements] = useState(null)
  useEffect(() => {
    setElements(sampleJSON[0])           // To set the elements to the object in sample.json
  }, [])
  const { fields } = elements ?? {}      // Destructure the object iff it is not null 
  return (
    <div className="container">
      <form>
        {fields ? fields.map((field, index) => <Elements key={index} field={field} />) : null}
      </form>
    </div>
  );
}

export default App;
