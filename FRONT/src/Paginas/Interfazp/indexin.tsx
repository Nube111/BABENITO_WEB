import React from "react";
import "./indexin.css";

function Interfazp(): JSX.Element {
  return (
    <div className="container">
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
        <button className="new-order-button">+ Crear nuevo pedido</button>
        <p className="subtitle">
          Para crear un nuevo pedido presionar el botón "Crear nuevo pedido"...
        </p>
        <div className="orders-table">
          <h2>Pedidos del 14 de Noviembre del 2024</h2>
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
                  <td>S/. 1,000.00</td>
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