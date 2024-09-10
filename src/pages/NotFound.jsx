
import React from "react";
import { Link } from 'react-router-dom'

const NotFound = () =>{
    return (
    <>
    <div style={{height:500}} >
        <h1 style={{color:"black"}}>404: Ruta Incorrecta</h1>
        <p style={{color:"black"}}>volver <Link to={"/"}> Home</Link></p>
    </div>
    </>
    )

       
}

export default NotFound;
