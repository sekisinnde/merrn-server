import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function Home () {
  
  // déclaration du state toys
  const [toys, setToys] = useState([]);

  async function getToys() {
    try {
      const response = await fetch(`http://localhost:5000/toys/`);
      const records = await response.json()
      setToys(records)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getToys()
  }, [])
 
  // let indexed = toys.findIndex(0)
  // console.log(indexed);
  console.log(toys);
   
    return (
      <div>
      <Link to="/">
      {toys.map((toy, index) => {
        return (
          <div>
            <p key="index">{toy.name}</p>
            <p>{toy.category_id}</p>
            <p>{toy.description}</p>
            <p>{toy.price}</p>
          </div>
    
    
    )}
  )
  
  
}</Link></div>)}