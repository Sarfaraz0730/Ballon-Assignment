
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import './Ballon.css'

const Balloon = () => {

  const[inputValue , setInputValue] = useState([])
  console.log(inputValue,  'user has just typed')
  const [colors, setColor] = useState([])
  const[show, setShow] = useState(false)
  // const spliced = colors.splice(2,0,'sarfaraz');
  // console.log("spliced" , spliced)

  //practice code in this file 
  

  

  // left divrandom circle color 
  
useEffect (() =>{
 
 let  div = new Array(5).fill(0) 
 div =div.map((e,i) =>{
   return { key:i, color: getRandomColor()}
     
  
   
   
  })
  setColor(div)

},[])


function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return  color;
}


const handleShoot= () =>{
  
for(let i=1;i<6;i++){
  if(inputValue.length===0){
    alert("Please Enter a value from 1-5")
  }
   if(inputValue[0] ===1){
    alert(`circle ${inputValue} disabled`)
    console.log(`value in user ${inputValue} Array`)
    console.log(inputValue,  'user has just typed')
  }
   if(inputValue[1] ===2){
    alert(`circle ${inputValue} disabled`)
   console.log(`value in user ${inputValue} Array`)
   console.log(inputValue,  'user has just typed')
 }
  if(inputValue[2] ===3){
    alert(`circle ${inputValue} disabled`)
   console.log(`value in user ${inputValue} Array`)
   console.log(inputValue,  'user has just typed')
 }
  if(inputValue[3] ===4){
     alert(`circle ${inputValue} disabled`)
   console.log(`value in user ${inputValue} Array`)
   console.log(inputValue,  'user has just typed')
 }
  if(inputValue[4] ===5){
    alert(`circle ${inputValue} disabled`)
   console.log(`value in user ${inputValue} Array`)
   console.log(inputValue,  'user has just typed')
 }
}
 if(inputValue.length>5 ){
  alert( `You  can't enter more than 5 value at a time`)
}
  
  inputValue.map((e) =>{
      
 
    if(inputValue[0]==1){
      alert(` Cirlce  ${inputValue} disabled` )

      console.log(` Cirlce  ${inputValue} disabled` )
      console.log(inputValue,  'user has just typed')
      
      
    }
    if(inputValue[1]==2){
      // alert("cirlce two disabled")
      alert(` Cirlce  ${inputValue} disabled` )
     
      console.log(` Cirlce  ${inputValue} disabled` )
      console.log(inputValue,  'user has just typed')
    } 
    
  })
  
}






const handleInput=(e) =>{

 setInputValue([...e.target.value])
 console.log( "values is coming", inputValue)

 

}


const displayOutput = (inputValue) =>{
   
   
   
    

}

displayOutput()
  return (
    <div>
      <h5>Ballon Game</h5>
      <div className="shadow-box">

{/* empty div start here */} 
          <div className='main-empty-div'>1

            
            <div className='sqaure-div'> Empty Div 
          
                 

                 
            </div>
          </div>
{/* empty div end here  */}

{/* ballon div start here */}

          <div  className='main-ballon-div'> <h6>Circle</h6>

          


              {
                   colors.map((e,i) =>{
                     return(
                      <div   style={{backgroundColor:e.color}}  className='main-ballon-div-1' key={i}> circle </div>     
                     )
                   })
                 }

{/* splice() function: This method is use to remove elements from the specific index of an array. */}
            
         
          </div>

{/* ballon div end here */}





 
{/* takinginput and button div  start here */}

       <div className='input-button-div'>

        <div className='inside-input-button-div'>
  
        <TextField

         onChange={handleInput} 
          id="outlined-number"
          label="Enter Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/> <br/>
         <Button    onClick={handleShoot} variant="outlined">Shoot</Button>
        </div>
       </div>




      {/* takinginput and button div  end here */}
      </div>



    </div>
  )
}

export default Balloon
