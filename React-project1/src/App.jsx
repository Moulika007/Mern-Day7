import "./App.css"
import { useState } from "react"
import Parent from "./components/Parent";

function App() {
  const productList=["fruit","vegs","milk"];
   return (
    <>
    <h1>Product List</h1>
    {
      productList.map((s,i)=>(
        <p key={i}>{s}</p>
      ))}
      </>
  )
}
export default App

