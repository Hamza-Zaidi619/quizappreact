import React, { useState } from "react";

const Array=()=>{
   
    // const biodata=[
    //     {
    //         id:0, myName:"hamza",age:20
    //     },{
    //         id:1, myName:"haider",age:17
    //     },{
    //         id:2, myName:"ali",age:5
    //     },{
    //         id:3,myName:"syed",age:20
    //     },{
    //         id:4,myName:"jon",age:30
    //     }
    // ]
    //   const[arr,setarr]=useState(biodata)
    const[object,setobject]=useState({
        name:"Hamza",age:20,id:1
    })
      
    //   let add=()=>{
    //     setarr([])
    //   }

    let change=()=>{
        setobject({...object,name:"haider"})
    }
    
    return(
        <>
   {/* {
    arr.map((x)=><h1>Name is {x.myName} and age is {x.age}</h1>)
   }
   <button onClick={add}>DELETE</button> */}
    <h1>Name is {object.name} and age is {object.age}</h1>

    <button onClick={change}>change</button>

        </>
    )
}
export default Array