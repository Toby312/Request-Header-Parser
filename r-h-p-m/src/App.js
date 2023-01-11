import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'


function App() {
  const [request, setRequest] = useState({})
  const[fromButtonClick, setFromButtonClick] = useState('')

  const handleClick1 = ()=>{
    setFromButtonClick(process.env.API_URL)
  }

  const handleClick2 = ()=>{
    setFromButtonClick('')
  }
  useEffect(()=>{
    axios.get(fromButtonClick)
    .then(res=>{
      console.log(res)
      setRequest(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[fromButtonClick])

  return (
    <div className="App">
      <div>
        Click the Button below to display IP address, language, operating system, and browser specs as a JSON object.
      </div>
      <div className='button-zone'>
        <button onClick={handleClick1}>show</button>
        <button onClick={handleClick2}>hide</button>
      </div>
      <div>
        ipaddress: {request.ipaddress}<br></br>
         language: {request.language}<br></br>
         software: {request.software}
      </div>
    </div>
  );
}

export default App;
