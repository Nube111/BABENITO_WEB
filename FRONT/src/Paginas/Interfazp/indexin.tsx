import React, { useState } from "react";
import "./indexin.css";

function Interfazp(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchClick = () => {
    if (selectedDate) {
      alert(`Buscando pedidos para la fecha: ${selectedDate}`);
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
          <button className="new-order-button">+ Crear nuevo pedido</button>
        </div>
        <div className="orders-table">
          <div className="editable-date">
            <label htmlFor="editable-date-input">Pedidos del: </label>
            {/* Usamos date para solo permitir la selección de fecha */}
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
              {[...Array(4)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <div className="order-item">
                      <img
                        src="./shoes.jpg" // Coloca la imagen de muestra aquí
                        alt="Zapato"
                        className="order-image"
                      />
                      <span>Pedido "código de pedido"</span>
                    </div>
                  </td>
                  <td>22</td>
                  <td>50</td>
                  <td>S/. 500.00</td>
                  <td>En espera</td>
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

