import React, { useState,useEffect } from "react";

const Profile = () =>{
        
    const name = "UsuarioRandom369";
    const correo = "usuario_random369@gmail.com";
        return (
          <div
            style={{
              height: "100vh",
              color: "black",
              backgroundColor: "grey",
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "20px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid black",
              }}
            >
              <h2>{name}</h2>
              <p>{correo}</p>
              <button>Cerrar Sesión</button>
            </div>
          </div>
        );
}

export default Profile;