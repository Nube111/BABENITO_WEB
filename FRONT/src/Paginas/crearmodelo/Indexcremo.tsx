import React, { useState } from "react";
import "./indexcremo.css";
import './CrearPedido'; // Importación del formulario

function CrearPedido(): JSX.Element {
  // Estado para gestionar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    dni: "",
    ruc: "",
    razon_social: "",
    priNom_cli: "",
    segNom_cli: "",
    apePat_cli: "",
    apeMat_cli: "",
    num_talla: "",
    cantidad: "",
    precio_total: "",
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend en formato JSON
    const payload = {
      dni: formData.dni,
      ruc: formData.ruc,
      razon_social: formData.razon_social,
      priNom_cli: formData.priNom_cli,
      segNom_cli: formData.segNom_cli,
      apePat_cli: formData.apePat_cli,
      apeMat_cli: formData.apeMat_cli,
      num_talla: formData.num_talla,
      cantidad: formData.cantidad,
      precio_total: formData.precio_total,
    };

    // Ejemplo de cómo se enviaría el JSON al backend usando fetch
    fetch("http://localhost:4000/createHojaTrabajo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pedido creado con éxito:", data);
      })
      .catch((error) => {
        console.error("Error al crear el pedido:", error);
      });
  };

  return (
    <div className="container-pedido">
      <header className="header">
        <h1 className="logo">BABENITO</h1>
        <input
          type="text"
          placeholder="Busque pedidos por fecha, estado o código..."
          className="search-bar"
        />
        <div className="menu">
          <span>Modelos</span>
          <span>Clientes</span>
          <img
            src="./menu-icon.png"
            alt="Menú"
            className="menu-icon"
          />
        </div>
      </header>
      <main className="main-content">
        <div className="breadcrumb">
          <a href="#">Pedidos</a> &gt; <span>Crear pedido</span>
        </div>
        <section className="model-section">
          <div className="model-left">
            <label htmlFor="model-code" className="section-label">
              Elección de modelo
            </label>
            <input
              id="model-code"
              type="text"
              placeholder="Código de modelo..."
              className="model-input"
            />
            <div className="model-preview">
              <img src="./shoes.jpg" alt="Modelo" className="model-image" />
              <p className="model-title">Modelo "código de modelo"</p>
              <p className="model-description">Datos esenciales del modelo...</p>
            </div>
          </div>
          <div className="model-right">
            <p className="model-info">
              En caso de no recordar el código del modelo en la parte derecha
              tenemos un botón de lista de modelos donde podremos visualizar
              todos los modelos y sus códigos, puede seleccionar el modelo que
              se busca y el código se autocompletará.
            </p>
            <button className="button-secondary">Lista de modelos</button>
          </div>
        </section>
        <section className="order-section">
          <h3 className="section-label">Datos específicos del pedido</h3>
          <div className="order-details">
            <input
              type="text"
              name="num_talla"
              value={formData.num_talla}
              onChange={handleChange}
              placeholder="Número de talla..."
              className="order-input"
            />
            <input
              type="text"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              placeholder="Cantidad..."
              className="order-input"
            />
            <input
              type="text"
              name="precio_total"
              value={formData.precio_total}
              onChange={handleChange}
              placeholder="Precio total..."
              className="order-input"
            />
          </div>
        </section>
        <section className="client-section">
          <h3 className="section-label">Cliente</h3>
          <div className="client-new">
            <h4>Cliente nuevo:</h4>
            <div className="client-grid">
              <input
                type="text"
                name="priNom_cli"
                value={formData.priNom_cli}
                onChange={handleChange}
                placeholder="Primer nombre"
              />
              <input
                type="text"
                name="segNom_cli"
                value={formData.segNom_cli}
                onChange={handleChange}
                placeholder="Segundo nombre"
              />
              <input
                type="text"
                name="apePat_cli"
                value={formData.apePat_cli}
                onChange={handleChange}
                placeholder="Primer apellido"
              />
              <input
                type="text"
                name="apeMat_cli"
                value={formData.apeMat_cli}
                onChange={handleChange}
                placeholder="Segundo apellido"
              />
              <input
                type="text"
                name="ruc"
                value={formData.ruc}
                onChange={handleChange}
                placeholder="RUC"
              />
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                placeholder="DNI"
              />
              <input
                type="text"
                name="razon_social"
                value={formData.razon_social}
                onChange={handleChange}
                placeholder="Razón social"
              />
            </div>
          </div>
        </section>
        <div className="order-actions">
          <p className="instructions">
            Si completaste todos los datos requeridos, puedes darle a crear
            pedido para finalizar el proceso.
          </p>
          <button className="button-primary create-order-button" onClick={handleSubmit}>
            Crear pedido
          </button>
        </div>
      </main>
    </div>
  );
}

export default CrearPedido;
