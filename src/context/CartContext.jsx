import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const agregarAlCarrito = (producto) => {
       
        const itemEnCart = cart.find((item) => item.id === producto.id);
       
        if (itemEnCart) {
            setCart(
            cart.map(item =>
                item.id === producto.id
                    ? { ...item, cant: item.cant + 1 }
                    : item
            )
        );
         
        } else {
            setCart([...cart, { ...producto, cant: 1 }]);
        }
    };

       const incrementHandle = (i) => {
          setCart(
            cart.map((pizza) =>
              pizza.id === i ? { ...pizza, cant: pizza.cant + 1 } : pizza
            )
          );
        };
      
        const decrementHandle = (i) => {
          setCart(
            cart.map((pizza) =>
                pizza.id === i && pizza.cant > 0
                  ? { ...pizza, cant: pizza.cant - 1 }
                  : pizza
              )
              .filter((pizza) => pizza.cant > 0)
          );
        };
        const getTotal = () => {
          const totalPizza = cart.reduce(
            (acc, pizza) => acc + pizza.price * pizza.cant,
            0
          );
          setTotal(totalPizza);
        };
      
        useEffect(() => {
          getTotal();
        }, [cart]);

        return (
            <CartContext.Provider 
                value={{ 
                cart,
                agregarAlCarrito,
                incrementHandle,
                decrementHandle,
                total
                }}>
            {children}
            </CartContext.Provider>
        );
    };

    export default CartProvider;