import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main style={{ display: "flex" }} className="pizzas">
        <div className="cardPizza">
          <img src={pizza.img} className="pizzaImg"></img>
          <h3 className="tittleCard">Pizza {pizza.name}</h3>
          <p>{pizza.desc}</p>
          <div>
            <hr />

            <h4>Ingredientes: </h4>
            <ul style={{ display: "flex", gap: 6 }}>
              {pizza.ingredients
                ? pizza.ingredients.map((ingredient, index) => (
                    <li style={{ listStyleType: "none" }} key={index}>
                      🍕{ingredient}
                    </li>
                  ))
                : null}
            </ul>
            <hr />
            <p className="precio">
              Precio: <span>$ {pizza.price}</span>
            </p>
            <hr />
          </div>
          <div className="botones">
            <button className="añadir">Añadir 🛒</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pizza;
