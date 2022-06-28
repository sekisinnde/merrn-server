import React from "react";
import { Link } from "react-router-dom";
 
export function Home(props) {
    return(<Link path="/"><tr>
        <td>{props.name}</td>
        <td>{props.category_id}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        </tr>
        </Link>)
}