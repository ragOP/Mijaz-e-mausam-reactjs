import React,{useEffect, useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
// import Image from '../src/files/bg.jpg'

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  component: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      width: '65%',
      margin: '0 auto'
      
  },
  leftContainer: {
      width: '27%',
      height: '80%',
      // backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      
      borderRadius: '20px 0 0 20px'
      
  },
  rightContainer: {
      width: '73%',
      height: '80%',
      background: 'linear-gradient(to right, #e74c3c, #e67e22)',
  },
  centertContainer:{
    height: '20 vh',
    display: 'flex',
    alignItems: 'center',
    width: '65%',
   padding:'0 0 0 150px'
  ,
answer:{
  height: '20 vh',
  display: 'flex',
  alignItems: 'center',
  width: '65%',
 padding:'0 0 0 150px'
}
}

})
//api used == https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=1c22d527864c67e368247dcd3c57174a
function App() { 
  const classes = useStyles();
  const [city,setCity] = useState();
const [search,setSearch]=useState("");
const fetchApi=async ()=>{
 
  //e.preventDefault();
 const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1c22d527864c67e368247dcd3c57174a`)
const data1=await response.json()
console.log(data1)
setCity(data1)
}



  useEffect(()=>{
    fetchApi();
 },[search] )
    return(
      <Box className={classes.component}>
            <Box  className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
            <>
      <div >
        <Box className={classes.centertContainer}  widthboxshadow={3}> <TextField  type="search" 
           className="inputFeild"
            onChange = {(e) => setSearch(e.target.value)}id="standard-basic" label="Insert city name" />
       <div><Button type = 'submit' variant="contained" color="secondary">
  Get_Report
</Button></div>
</Box>
            
           
          
       <Box>
      {!city ? (<p>Data not dound</p>):
      (<div>
    <Typography>City Name: {search}</Typography>
    <Typography>Temp: {city.main && city.main.temp}</Typography>
    <Typography>Temp Min: {city.main && city.main.temp_min} </Typography>
    <Typography>Temp Max: { city.main && city.main.temp_max} </Typography>
    <Typography>Temp  Mood: {city.weather && city.weather[0].description} </Typography>
    <Typography>Temp : {city.weather && city.weather[0].icon} </Typography>
    <Typography>Country: {city.sys && city.sys.country} </Typography>
    

   
   </div>
      
      )}
      <form noValidate autoComplete="off">
 
</form>
</Box>
</div>
        </>
            </Box>
        </Box>
    );
    
}
export default App;
