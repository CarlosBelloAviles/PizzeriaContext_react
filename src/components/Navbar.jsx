import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Nabvar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <section className="container">
      <div className="Nav_Button">
        <p className="title">Pizzería Mamma Mía!</p>
        <nav className="menu">
          <Link to={"/"} className="link">
            🍕 Home
          </Link>
          {token ? (
            <div className="bottons">
              <button>🔓 Profile</button>
              <button>🔒 Logout</button>
            </div>
          ) : (
            <div className="bottons">
              <Link to={"/login"} className="link">
                🔑 Login
              </Link>
              <Link to={"/register"} className="link">
                🔐 Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      <div className="total">
        <Link to={"/profile"} className="link">
          🔓 Profile
        </Link>
        <Link to={"/cart"} className="link">
          🛒${total}
        </Link>
      </div>
    </section>
  );
};

export default Nabvar;
