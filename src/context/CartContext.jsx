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



    const eliminarDelCarrito = (id) => {
        setCart(cart.filter(item => item.id !== id));
      };
    
      const aumentarCantidad = (producto) => {
        setCart(
          cart.map(item =>
            item.id === producto.id
              ? { ...item, cant: item.cant + 1 }
              : item
          )
        );
      };
    
      const disminuirCantidad = (producto) => {
        if (producto.cant === 1) {
          eliminarDelCarrito(producto.id);
        } else {
          setCart(
            cart.map(item =>
              item.id === producto.id
                ? { ...item, cant: item.cant - 1 }
                : item
            )
          );
        }
      };
      
      useEffect(() => {
        const newTotal = cart.reduce(
          (acc, item) => acc + item.cant * item.price,
          0
        );
        console.log(newTotal);
        setTotal(newTotal);
        }, [cart]);

        return (
            <CartContext.Provider 
                value={{ 
                cart,
                agregarAlCarrito,
                aumentarCantidad,
                disminuirCantidad,
                total
                }}>
            {children}
            </CartContext.Provider>
        );
    };

    export default CartProvider;