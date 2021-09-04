import React,{useEffect, useState} from 'react';
import './App.css';


function App() { 
  const [city,setCity] = useState();
const [search,setSearch]=useState("Delhi");

  
  
  useEffect(()=>{
    const fetchApi=async ()=>{
   
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1c22d527864c67e368247dcd3c57174a`)
    
    const data1=await response.json()
    
   console.log(data1)
    setCity(data1)
    }
fetchApi();
  },[search])
  
  return(
      <>
        
            <input 
            type="search" 
           
            className="inputFeild"
            onChange = {(e) => setSearch(e.target.value)}  ></input>
            <button type = 'submit' >Click to submit</button>
       
        <p>{search}</p>
    <h2>{city.weather.main.temp}</h2> 
  
        </>
    );
    
}

export default App;
