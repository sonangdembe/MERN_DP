
 import Button from "./Button";



import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
 import About from './About'
 import Contact from './Contact'
 import router from './routes'
 import { useState } from 'react'


function App(){
 // this will not display the ans in browswe but it will show ansswer in inspect only. So, it developed useStae.It can handle the changes in the code
 const [count,setCount]= useState(0)
 const [name,setName] = useState("sona")


 
 return (
  
 
        // <BrowserRouter>
        // <Routes>
        //   <Route path='/'element={<Home/>}/>
        //   <Route path='/about' element={<About/>}/>
        //   <Route path='/contact' element={<Contact/>}/>
        // </Routes>
        // </BrowserRouter>
        
        // another way of routing
        //  <RouterProvider router={router}/>
          
          // useState
          
          <>
          <h1>{name}</h1>
          {/* <button onClick={()=>setCount(count + 1)}>+</button> */}
          <button onClick={()=>setName()}>submit</button>
          </>


  )
}

export default App 


// import {useEffect, useState} from  "react"


// function App(){
// const [count, setCount] = useState(0)
// const [nextCount, setNextCount] = useState(0)
//   // anynonomous functions and it will take the array called sependencies
//   // useEffect (()=>{
//   // console.log("useEffect was called but not trigger");    // it will display 2 output because 

  
//   // },[]) 

//   //second useEffct
//   // const [count,setCount] = useState(0)
//   // useEffect(()=>{
//   //      console.log("useEffect was called and trigger");    
//   //      // this will increase the no. in browser too and console too 
//   //      // this is used wheen we have to change the effects and 
//   // },[count])

// // third one
// // useEffect(()=>{
// //     console.log("Third type of useEffects");
// // })

//     return(
//       <>
//        <h1>{count}</h1>
//        <button onClick={()=> setCount(count+1)}>+</button>
//        <h1>{nextCount}</h1>
//        <button onClick={()=> setNextCount(nextCount +1)}>+</button>
//       </>
//     )

// }
// export default App
