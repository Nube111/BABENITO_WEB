import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir
import "./indexin.css";

function Interfazp(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [pedidos, setPedidos] = useState<any[]>([]); // Para almacenar los datos de los pedidos recibidos
  const navigate = useNavigate()//redirigir
  const handleNavigation = () => {
    navigate("/crearmodelo");
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  
  const handleSearchClick = async () => {
    if (selectedDate) {
      // Convertir la fecha seleccionada al formato JSON necesario
      const datePayload = { fecha: selectedDate };
      
      try {
        const response = await fetch("http://localhost:4000/filtrarfecha", {
          method: "POST", // Enviamos como POST ya que se está enviando un JSON
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datePayload), // Enviamos la fecha al backend
        });

        if (response.ok) {
          const data = await response.json();
          setPedidos(data.datos); // Al recibir la respuesta, actualizamos el estado de los pedidos
        } else {
          alert("Error al obtener los pedidos.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al realizar la solicitud.");
      }
    } else {
      alert("Por favor, seleccione una fecha.");
    }
  };

  return (
    <div className="container-interfazp">
      <header className="header">
        <h1>BABENITO</h1>
        <input
          type="text"
          placeholder="Busque pedidos por fecha, estado o código..."
          className="search-bar"
        />
        <div className="menu">
          <span>Modelos</span>
          <span>Clientes</span>
          <img
            src="./menu-icon.png" // Coloca el ícono del menú aquí
            alt="Menú"
            className="menu-icon"
          />
        </div>
      </header>
      <main className="main-content">
        <div className="actions-row">
          <p className="subtitle">
            Para crear un nuevo pedido presionar el botón "Crear nuevo pedido"...
          </p>
          <button className="new-order-button" onClick={handleNavigation}>+ Crear nuevo pedido</button>
          
        </div>
        <div className="orders-table">
          <div className="editable-date">
            <label htmlFor="editable-date-input">Pedidos del: </label>
            <input
              id="editable-date-input"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="date-input"
            />
            <button className="search-button" onClick={handleSearchClick}>
              Buscar
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Talla</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Otros</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id_pedido}>
                  <td>
                    <div className="order-item">
                      <img
                        src="./shoes.jpg" // Coloca la imagen de muestra aquí
                        alt="Zapato"
                        className="order-image"
                      />
                      <span>Pedido {pedido.id_pedido}</span>
                    </div>
                  </td>
                  <td>{pedido.numtalla}</td>
                  <td>{pedido.cantidad_producto}</td>
                  <td>S/. {pedido.precio_total.toFixed(2)}</td>
                  <td>En espera</td> {/* Puedes reemplazar este estado si está en la respuesta */}
                  <td>
                    <a href="#">Sobre el pedido</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Interfazp;
