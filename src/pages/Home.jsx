import React, { useState,useEffect,useContext } from "react";
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
/*import {pizzaCart} from '../assets/js/pizzas.js'*/
import { PizzaContext } from "../context/PizzaContext";
 
const Home = ( ) =>{
    const {pizzas} = useContext(PizzaContext)

    return (
       
        <div>
            <Header/>
                <main className="pizzas">
                {pizzas.map((producto) => (
                    <CardPizza
                        key={producto.id}
                        name={producto.name}
                        price={producto.price}
                        ingredients={producto.ingredients}
                        img={producto.img}
                        producto={producto}
                    />
                ))}
                </main>
        </div>  
                );
}

export default Home;