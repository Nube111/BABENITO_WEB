import React, { useState } from "react";
import "./index.css";

const pedidosEjemplo = [
  {
    codigo: "96",
    modelo: "Zapato cocco 17-21",
    color: "Azul",
    cliente: "Juan Pérez",
    estado: "En proceso",
    imagen: "./zapato-cocco.jpg", // Ruta de la imagen
  },
  {
    codigo: "979",
    modelo: "Sandalia natural 17-21",
    color: "Amarillo",
    cliente: "Ana López",
    estado: "Finalizado",
    imagen: "./sandalia-natural.jpg", // Ruta de la imagen
  },
  {
    codigo: "969",
    modelo: "Sandalia chocolate 17-21",
    color: "Café",
    cliente: "Carlos Ruiz",
    estado: "Pendiente",
    imagen: "./sandalia-chocolate.jpg", // Ruta de la imagen
  },
];

const Datospedido: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPedidos, setFilteredPedidos] = useState(pedidosEjemplo);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = pedidosEjemplo.filter(
      (pedido) =>
        pedido.modelo.toLowerCase().includes(term) ||
        pedido.codigo.includes(term) ||
        pedido.cliente.toLowerCase().includes(term)
    );
    setFilteredPedidos(filtered);
  };

  return (
    <div className="order-form-container">
      <header className="form-header">
        <h1>BABENITO</h1>
        <input
          type="text"
          placeholder="Buscar pedido por modelo, código o cliente..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <main>
        <div className="form-horizontal">
          <div className="form-section">
            <label>Código del Modelo</label>
            <input type="text" placeholder="Ej. 901" />
          </div>
          <div className="form-section">
            <label>Código de Corte</label>
            <input type="text" placeholder="Ej. Capellada 13" />
          </div>
          <div className="form-section">
            <label>Código de Venta</label>
            <input type="text" placeholder="Ej. 781-1" />
          </div>
          <div className="form-section">
            <label>Color del Hilo</label>
            <input type="text" placeholder="Ej. 269 plomo" />
          </div>
          <div className="form-section">
            <label>Color de Planta</label>
            <input type="text" placeholder="Ej. Azul" />
          </div>
        </div>
        <button className="create-order-button">Crear Pedido</button>

        <h2>Resultados de búsqueda</h2>
        <div className="table-container">
          <table className="pedido-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Código</th>
                <th>Modelo</th>
                <th>Color</th>
                <th>Cliente</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredPedidos.length > 0 ? (
                filteredPedidos.map((pedido, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={pedido.imagen}
                        alt={pedido.modelo}
                        className="pedido-imagen"
                      />
                    </td>
                    <td>{pedido.codigo}</td>
                    <td>{pedido.modelo}</td>
                    <td>{pedido.color}</td>
                    <td>{pedido.cliente}</td>
                    <td>{pedido.estado}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No se encontraron pedidos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Datospedido;
