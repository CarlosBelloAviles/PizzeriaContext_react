import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = (props) => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="cardPizza">
      <img src={props.img} className="pizzaImg"></img>
      <h3 className="tittleCard">Pizza {props.name}</h3>
      <div>
        <hr />
        <h4>Ingredientes: </h4>
        <ul style={{ display: "flex", gap: 6 }}>
          {props.ingredients.map((ingrediente, index) => (
            <li style={{ listStyleType: "none" }} key={index}>
              🍕{ingrediente}
            </li>
          ))}
        </ul>
        <hr />
        <p className="precio">
          Precio: <span>$ {props.price.toLocaleString()}</span>
        </p>
        <hr />
      </div>
      <div className="botones">
        <Link to={"/pizza"} className="link">
          Ver Más 👀
        </Link>
        <button
          onClick={() => agregarAlCarrito(props.producto)}
          className="añadir"
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
