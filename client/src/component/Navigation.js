import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'
 
export default function Navigation() {
    
    return (
        <div className="nav">
            <Link to="/display"><li>Display</li></Link>
        </div>
    )
}