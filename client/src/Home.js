// TODO: faire le composant avec le fetch à l'API
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
const Home =() => {
 const [toys, setToys] = useState({
   name: "",
   category_id: "",
   description: "",
   price: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     //const id = params.id.toString();
     //const response = await fetch(`http://localhost:5000/toys/${params.id.toString()}`);
     const response = await fetch(`http://localhost:5000/toys/`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setToys(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
}
 export default Home;