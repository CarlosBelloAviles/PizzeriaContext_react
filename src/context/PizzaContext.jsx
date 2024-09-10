import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

 const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      alert(
        `Error fetching pizza data: ${error.message} No se pudo obtener la información de las pizzas. Por favor intente mas tarde`
      );
    }
  }; 

  useEffect(() => {
    getPizzas();
}, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>{children}</PizzaContext.Provider>
  );
};
export default PizzaProvider;
