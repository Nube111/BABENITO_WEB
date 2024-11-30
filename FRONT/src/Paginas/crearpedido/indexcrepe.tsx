import React, { useState } from "react";
import "./indexcrepe.css";
import "./FormularioCrearModelo";

function CrearPedido(): JSX.Element {
  const [formData, setFormData] = useState({
    planta: "",
    cod_venta: "",
    cod_cortado: "",
    c_cuero: "",
    desc_serie: "",
    color_forro: "",
    material: "",
    descripcion_aplique: "",
    color_aplique: "",
    codigo_apliques: "",
    nom_adorno: "",
    num_adorno: "",
    codigo_picador: "",
    descripcion_picador: "",
    color_picador: "",
    color_hilo: "",
    numero_hilo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/createModelo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Pedido creado exitosamente");
        console.log("Datos recogidos del formulario:", formData);
      } else {
        console.error("Error al crear el pedido");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="crear-pedido-container">
      <header className="crear-pedido-header">
        <h1 className="crear-pedido-logo">BABENITO</h1>
        <input
          type="text"
          placeholder="Busque pedidos por fecha, estado o código..."
          className="crear-pedido-search-bar"
        />
        <div className="crear-pedido-menu">
          <span>Modelos</span>
          <span>Clientes</span>
          <img
            src="./menu-icon.png"
            alt="Menú"
            className="crear-pedido-menu-icon"
          />
        </div>
      </header>
      <main className="crear-pedido-main-content">
        <div className="crear-pedido-breadcrumb">
          <a href="#">Pedidos</a> &gt; <span>Crear Pedido</span>
        </div>
        <section className="crear-pedido-model-section">
          <div className="crear-pedido-model-left">
            <div className="crear-pedido-model-preview">
              <img
                src="./model-placeholder.png"
                alt="Modelo"
                className="crear-pedido-model-image"
              />
              <p className="crear-pedido-model-title">Modelo "código de modelo"</p>
              <p className="crear-pedido-model-description">
                Datos esenciales del modelo...
              </p>
            </div>
          </div>
          <form className="crear-pedido-form" onSubmit={handleSubmit}>
            <div className="crear-pedido-model-right">
              <input
                type="text"
                placeholder="Planta"
                name="planta"
                value={formData.planta}
                onChange={handleChange}
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Serie"
                name="desc_serie"
                value={formData.desc_serie}
                onChange={handleChange}
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Color de cuero"
                name="c_cuero"
                value={formData.c_cuero}
                onChange={handleChange}
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Código de venta"
                name="cod_venta"
                value={formData.cod_venta}
                onChange={handleChange}
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Código de cortada"
                name="cod_cortado"
                value={formData.cod_cortado}
                onChange={handleChange}
                className="crear-pedido-model-input"
              />
            </div>
            <section className="crear-pedido-attributes-section">
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Forro</label>
                <input
                  type="text"
                  placeholder="Color"
                  name="color_forro"
                  value={formData.color_forro}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Hilo</label>
                <input
                  type="text"
                  placeholder="Color"
                  name="color_hilo"
                  value={formData.color_hilo}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Número"
                  name="numero_hilo"
                  value={formData.numero_hilo}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Adorno</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nom_adorno"
                  value={formData.nom_adorno}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Número"
                  name="num_adorno"
                  value={formData.num_adorno}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Picadores</label>
                <input
                  type="text"
                  placeholder="Código"
                  name="codigo_picador"
                  value={formData.codigo_picador}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Color"
                  name="color_picador"
                  value={formData.color_picador}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Descripción"
                  name="descripcion_picador"
                  value={formData.descripcion_picador}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Apliques</label>
                <input
                  type="text"
                  placeholder="Código"
                  name="codigo_apliques"
                  value={formData.codigo_apliques}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Color"
                  name="color_aplique"
                  value={formData.color_aplique}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
                <input
                  type="text"
                  placeholder="Descripción"
                  name="descripcion_aplique"
                  value={formData.descripcion_aplique}
                  onChange={handleChange}
                  className="crear-pedido-model-input"
                />
              </div>
            </section>
            <section className="crear-pedido-button-section">
              <button type="submit" className="crear-pedido-submit-button">
                Crear Modelo
              </button>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
}

export default CrearPedido;
