import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir
import "./index.css";

function Logeo(): JSX.Element {
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(""); // Para mostrar el mensaje de error

  const navigate = useNavigate(); // Hook de react-router-dom para redirigir

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir que la página se recargue al enviar el formulario

    // Crear el objeto JSON con los datos del formulario
    const loginData = {
      usuario: usuario,
      contraseña: contraseña,
    };

    try {
      // Hacer la solicitud POST al backend para comprobar las credenciales
      const response = await fetch("http://localhost:4000/logeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Verificar la respuesta del servidor
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Comprobar si las credenciales son correctas
        if (data.mensaje === "Contraseña correcta") {
          // Si es correcto, redirigir a la interfaz
          localStorage.setItem("token", data.mensaje);
          navigate("/interfazp");
        } else {
          // Si no es correcto, mostrar un mensaje de error
          setError("Usuario o contraseña incorrectos");
        }
      } else {
        setError("Hubo un error con la conexión al servidor");
      }
    } catch (error) {
      setError("Hubo un error al intentar iniciar sesión");
      console.error(error);
    }
  };

  return (
    <div className="container">
      {/* Sección del formulario */}
      <div className="login-section">
        <h1 className="brand-title">BABENITO</h1>
        <p className="welcome-text">¡Bienvenido!</p>
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Usuario
            <input
              type="text"
              placeholder="usuario"
              className="input-field"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado de usuario
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              placeholder="********"
              className="input-field"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} // Actualiza el estado de contraseña
            />
            <a href="#" className="forgot-password">
              ¿Has olvidado tu contraseña?
            </a>
          </label>
          <button className="login-button">
            INGRESAR →
          </button>
        </form>
        {/* Mostrar el error si es que hay */}
        {error && <p className="error-message">{error}</p>}
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
