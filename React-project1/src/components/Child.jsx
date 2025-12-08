import React from 'react'
export default function Child({custombutton}) {
  return (
    <div>Child {}   
          <button onClick={custombutton}>Click</button>

       </div>
  )
}
