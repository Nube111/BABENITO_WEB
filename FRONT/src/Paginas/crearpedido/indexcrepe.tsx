import React from "react";
import "./indexcrepe.css";
import "./FormularioCrearModelo"; // 

function CrearPedido(): JSX.Element {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      planta: formData.get["planta"],
      cod_venta: formData.get["cod_venta"],
      cod_cortado: formData.get["cod_cortado"],
      c_cuero: formData.get["c_cuero"],
      desc_serie: formData.get["desc_serie"],
      color_forro: formData.get["color_forro"],
      material: formData.get["material"],
      descripcion_aplique: formData.get["descripcion_aplique"],
      color_aplique: formData.get["color_aplique"],
      codigo_apliques: formData.get["codigo_apliques"],
      nom_adorno: formData.get["nom_adorno"],
      num_adorno: formData.get["num_adorno"],
      codigo_picador: formData.get["codigo_picador"],
      descripcion_picador: formData.get["descripcion_picador"],
      color_picador: formData.get["color_picador"],
      color_hilo: formData.get["color_hilo"],
      numero_hilo: formData.get["numero_hilo"],
    };

    console.log(data)

    try {
      const response = await fetch("http://localhost:4000/createModelo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log("Pedido creado exitosamente");
        console.log("Datos recogidos del formulario:", data)
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
          <form className="crear-pedido-form" onSubmit={handleSubmit} >
            <div className="crear-pedido-model-right">
              <input
                type="text"
                placeholder="Planta"
                name="planta"
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Serie"
                name="desc_serie"
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Color de cuero"
                name="c_cuero"
                className="crear-pedido-model-input"
              />
              <input
                type="text"
                placeholder="Código de venta"
                className="crear-pedido-model-input"
                name="cod_venta"
              />
              <input
                type="text"
                placeholder="Código de cortada"
                className="crear-pedido-model-input"
                name="cod_cortado"
              />
            </div>
            <section className="crear-pedido-attributes-section">
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Forro</label>
                <input type="text" placeholder="Color" className="crear-pedido-model-input" name="color_forro" />
                <input type="text" placeholder="Material" className="crear-pedido-model-input" name="material" />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Hilo</label>
                <input type="text" placeholder="Color" className="crear-pedido-model-input" name="color_hilo" />
                <input type="text" placeholder="Número" className="crear-pedido-model-input" name="numero_hilo" />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Adorno</label>
                <input type="text" placeholder="Nombre" className="crear-pedido-model-input" name="nom_adorno"/>
                <input type="text" placeholder="Número" className="crear-pedido-model-input" name="num_adorno" />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Picadores</label>
                <input type="text" placeholder="Código" className="crear-pedido-model-input" name="codigo_picador" />
                <input type="text" placeholder="Color" className="crear-pedido-model-input" name="color_picador" />
                <input type="text" placeholder="Descripción" className="crear-pedido-model-input" name="descripcion_picador" />
              </div>
              <div className="crear-pedido-attribute">
                <label className="crear-pedido-section-label">Apliques</label>
                <input type="text" placeholder="Código" className="crear-pedido-model-input" name="codigo_apliques" />
                <input type="text" placeholder="Color" className="crear-pedido-model-input" name="color_apliques" />
                <input type="text" placeholder="Descripción" className="crear-pedido-model-input" name="descripcion_apliques" />
              </div>
            </section>
            <section className="crear-pedido-button-section">
              <button type="submit" className="crear-pedido-submit-button">Crear Modelo</button>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
  
}

export default CrearPedido;

