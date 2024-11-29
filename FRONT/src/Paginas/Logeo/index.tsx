import React from "react";
import "./index.css";

function Logeo(): JSX.Element {
  return (
    <div className="container">
      {/* Sección del formulario */}
      <div className="login-section">
        <h1 className="brand-title">BABENITO</h1>
        <p className="welcome-text">¡Bienvenido!</p>
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form">
          <label>
            Usuario
            <input
              type="email"
              placeholder="test@gmail.com"
              className="input-field"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              placeholder="********"
              className="input-field"
            />
            <a href="#" className="forgot-password">
              ¿Has olvidado tu contraseña?
            </a>
          </label>
          <button className="login-button">
            INGRESAR →
          </button>
        </form>
      </div>

      {/* Sección del logo */}
      <div className="logo-section">
        <img
          src={"./babenito.jpg"}
          alt="Babenito Logo"
          className="logo-image"
        />
      </div>
    </div>
  );
}

export default Logeo;
