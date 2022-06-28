import React, { useEffect, useState } from "react";
 
export default function Display() {
  
  // déclaration du state toys
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getToys() {
    try {
      const response = await fetch(`http://localhost:5000/toys/`);
      const records = await response.json()
      setToys(records)
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategories() {
    try {
      const response = await fetch(`http://localhost:5000/categories/`);
      const records = await response.json()
      setCategories(records)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getToys()
    getCategories()
  }, [])
 
  // let indexed = toys.findIndex(0)
  // console.log(indexed);
  console.log(toys);
  console.log(categories);
   
    return (
      <div>
      
      {toys.map((toy, category, index) => {
        return (
          <form >
          <div>
            <h1>Toys</h1>
            <p>{category.name}</p>
            <p key={index}>{toy.name}</p>
            <p>{toy.description_id}</p>
            <p>{toy.description}</p>
            <p>{toy.price}</p>
          </div>
    
          </form>
    )}
  )
  
  
}</div>)}