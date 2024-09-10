import React, { useState } from 'react';


const RegisterPage = () =>{
     const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [error, setError] = useState('')
        const [succes, setsucces] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
    
        const handleSubmit = (e) =>{
            e.preventDefault()
            
            if (email.trim() === ''|| password.trim() === '' || confirmPassword.trim() === '') {
              setError('Todos los campos son Obligatorios')
                return
            }
            if (password.length < 6) {
              setError('La contraseña debe tener al menos 6 caracteres')
                return
            } 
               
           if (password !== confirmPassword) {
            setError('Las contraseñas deben coencidir')
            
           } else{
            setsucces('Cuenta registrada correctamente')
        }
            setEmail('')  
            setPassword('') 
            setConfirmPassword('')
           }
    
           const inputChange = ({target}) =>{
             const {value, name} = target
             if (name === 'email') {
                setEmail(value)
                
             } else if (name === 'contraseña'){
                setPassword(value)
             } else if (name === 'repeatPassword')
             setConfirmPassword(value)
           }
        
        return (
        <form onSubmit={handleSubmit}>
            <h2>Registrate</h2>
            <div className='containerForm'>
            <div>
                <h3>📧 Email</h3>
                <input
                type="email" 
                placeholder='Ingresa tu correo electronico' 
                name='email' 
                value={email}
                onChange={inputChange}
               
                />
            </div>
            <div>
                <h3>🗝 Password</h3>
                <input 
                type="password" 
                placeholder='Ingresa tu contraseña' 
                name='contraseña'
                value={password}
                onChange={inputChange}
                /> 
            </div>
            <div>
                <h3>🗝 Confirmar Password</h3>
                <input 
                type="password" 
                placeholder='Repite tu contraseña' 
                name='repeatPassword'
                value={confirmPassword}
                onChange={inputChange}
                /> 
            </div>
                 {error? <p style={{color:'red'}}>{error}</p>: null}
                {succes?<p style={{color:'green'}}>{succes}</p>: null}
            </div>
            <button type='submit'>Enviar</button>
        </form>
      )
};

export default RegisterPage;