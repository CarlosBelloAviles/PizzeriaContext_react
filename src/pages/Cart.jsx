import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ()=>{

    const {
        cart,
        aumentarCantidad,
        disminuirCantidad,
        total,
      } = useContext(CartContext);

     
    return(
         <>
        {cart.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "greenyellow",
              height: "100vh",
            }}
          >
            <h1>Carrito de compras</h1>
            <div
              style={{ backgroundColor: "red", textAlign: "center", width: 350 }}
            >
              <p>El Carrito esta Vacío</p>
            </div>
          </div>
        ) : (
          <div className="contenedorCart">
            <h1 style={{ textAlign: "center" }}>Carrito de compras</h1>
            <h2 style={{ textAlign: "center" }}>Total: ${total}</h2>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              {cart.map((producto) => (
                <div className="pizzaCart">
                  <img className="pizzaImgCart" src={producto.img} alt="" />
                  <h3>{producto.name}</h3>
                  <p>precio: ${producto.price * producto.cant}</p>
                  <div className="contadorPizza">
                    <button
                      onClick={() => {
                        disminuirCantidad(producto);
                      }}
                      className="disminuir"
                    >
                      -
                    </button>
                    <p>{producto.cant}</p>
                    <button
                      onClick={() => {
                        aumentarCantidad(producto);
                      }}
                      className="incrementar"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              ;
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button>Comprar</button>
            </div>
          </div>
        )}
      </>
    )
}

export default Cart;