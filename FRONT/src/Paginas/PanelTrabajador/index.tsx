import React, { useEffect, useState } from "react";
import "./index.css";

// Datos de ejemplo
const pedidos = [
  {
    codigo: "96",
    genero: "Hombre",
    descripcion: "Zapato cocco 17-21",
    planta: "África",
    cliente: "1",
    imagen: "/zapato-cocco.jpg",
  },
  {
    codigo: "979",
    genero: "Hombre",
    descripcion: "Sandalia natural 17-21",
    planta: "África",
    cliente: "2",
    imagen: "/sandalia-natural.jpg",
  },
  {
    codigo: "969",
    genero: "Mujer",
    descripcion: "Sandalia chocolate 17-21",
    planta: "África",
    cliente: "3",
    imagen: "/sandalia-chocolate.jpg",
  },
];

const PanelTrabajador: React.FC = () => {
  const token = localStorage.getItem("token");
  if (!token) return <p>Usuario no logueado</p>;

  const [searchTerm, setSearchTerm] = useState("");

  // Eliminar token al cerrar la pestaña
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("token");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Filtrar los pedidos según el término de búsqueda
  const filteredPedidos = pedidos.filter((pedido) =>
    pedido.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para crear un nuevo modelo (simulación)
  const handleCreateModel = () => {
    alert("Funcionalidad para crear un nuevo modelo aún no implementada.");
  };

  return (
    <div className="panel-container">
      <header className="panel-header">
        <h1>Panel de Trabajador</h1>
        <div className="panel-babenito">
          <span>BABENITO</span>
          <input
            type="text"
            placeholder="Buscar modelo por descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="panel-options">
            <button className="dropdown-button">Modelos ⌄</button>
            <button className="dropdown-button">Clientes</button>
            <button
              className="new-order-button"
              onClick={handleCreateModel}
            >
              + Crear nuevo modelo
            </button>
          </div>
        </div>
      </header>

      <main className="panel-main">
        <p>Pedidos del 15 de Noviembre del 2024</p>
        <table className="panel-table">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Código</th>
              <th>Género</th>
              <th>Descripción</th>
              <th>Planta</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {filteredPedidos.length > 0 ? (
              filteredPedidos.map((pedido, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={pedido.imagen}
                      alt={pedido.descripcion}
                      className="product-image"
                    />
                  </td>
                  <td>{pedido.codigo}</td>
                  <td>{pedido.genero}</td>
                  <td>{pedido.descripcion}</td>
                  <td>{pedido.planta}</td>
                  <td>{pedido.cliente}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No se encontraron resultados</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default PanelTrabajador;
