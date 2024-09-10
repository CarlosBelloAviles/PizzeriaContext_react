import React, { useState } from "react";

const LoginPage = () =>{

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [error, setError] = useState('')
   const [succes, setsucces] = useState('')

   const handleSubmit = (e) =>{
    e.preventDefault()
    
    if (email.trim() === ''|| password.trim() === '') {
      setError('Todos los campos son Obligatorios')
        return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
        return
    } 
       
  
    setsucces('Cuenta iniciada correctamente')
    setEmail('')  
    setPassword('') 
   }
 
   
   const inputChange = ({target})=>{
     const {value, name} = target
     if (name === "email") {
        setEmail(value)
       
     } else if (name === 'contraseña') {
        setPassword(value)
     }
      
   }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div>
            <h3>📧 Email</h3>
            <input onChange={inputChange} 
            type="email" 
            placeholder='Ingresa tu correo electronico' 
            name='email' 
            value={email}
            />
        </div>
        <div>
            <h3>🗝 Password</h3>
            <input onChange={inputChange} 
            type="password" 
            placeholder='Ingresa tu contraseña' 
            name='contraseña'
            value={password}
           /> 
            
          
            {error? <p style={{color:'red'}}>{error}</p>: null}
            {succes?<p style={{color:'green'}}>{succes}</p>: null}
        </div>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default LoginPage;