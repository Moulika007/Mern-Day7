import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [count,setCount]=useState(0);
    const increment=()=>{setCount(count+1)}
  return (
    <div>
       <h1>This is a parent componenet</h1>
       <Child custombutton={increment}/>

       <h1>{count}</h1>
    </div>
  )
}
