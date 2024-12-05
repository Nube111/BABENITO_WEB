import React, { useState } from "react";
import "./indexcremo.css";

export const CrearPedidoFormulario: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

    // Envío del formulario como JSON al backend
    fetch("URL_DEL_BACKEND", {
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
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Datos del Cliente</h3>
      <div className="client-details">
        <input
          type="text"
          name="priNom_cli"
          value={formData.priNom_cli}
          onChange={handleChange}
          placeholder="Primer nombre"
          required
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
          required
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
          required
        />
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="DNI"
          required
        />
        <input
          type="text"
          name="razon_social"
          value={formData.razon_social}
          onChange={handleChange}
          placeholder="Razón social"
        />
      </div>

      <h3>Detalles del Pedido</h3>
      <div className="order-details">
        <input
          type="text"
          name="num_talla"
          value={formData.num_talla}
          onChange={handleChange}
          placeholder="Número de talla"
          required
        />
        <input
          type="number"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          required
        />
        <input
          type="text"
          name="precio_total"
          value={formData.precio_total}
          onChange={handleChange}
          placeholder="Precio total"
          required
        />
      </div>

      <button type="submit" className="button-primary">
        Crear pedido
      </button>
    </form>
  );
};
