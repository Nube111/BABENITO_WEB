import React, { useState } from "react";
// import "./FormularioCrearModelo.css"; // Puedes crear estilos específicos para este componente

function FormularioCrearModelo(): JSX.Element {
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


  
  // Manejador para actualizar el estado al escribir en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador para enviar los datos al backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página
    try {
      const response = await fetch("http://localhost:4000/createModelo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Modelo creado exitosamente");
        // Resetea el formulario después de enviar
        setFormData({
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
      } else {
        alert("Error al crear el modelo. Por favor, verifica los datos.");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-crear-modelo">
      {/* Campos del formulario */}
      <div>
        <label htmlFor="planta">Planta:</label>
        <input
          id="planta"
          name="planta"
          type="text"
          placeholder="Planta"
          value={formData.planta}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cod_venta">Código de Venta:</label>
        <input
          id="cod_venta"
          name="cod_venta"
          type="text"
          placeholder="Código de Venta"
          value={formData.cod_venta}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cod_cortado">Código de Cortado:</label>
        <input
          id="cod_cortado"
          name="cod_cortado"
          type="text"
          placeholder="Código de Cortado"
          value={formData.cod_cortado}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="c_cuero">Corte de Cuero:</label>
        <input
          id="c_cuero"
          name="c_cuero"
          type="text"
          placeholder="Corte de Cuero"
          value={formData.c_cuero}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="desc_serie">Descripción de Serie:</label>
        <input
          id="desc_serie"
          name="desc_serie"
          type="text"
          placeholder="Descripción de Serie"
          value={formData.desc_serie}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color_forro">Color de Forro:</label>
        <input
          id="color_forro"
          name="color_forro"
          type="text"
          placeholder="Color de Forro"
          value={formData.color_forro}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="material">Material:</label>
        <input
          id="material"
          name="material"
          type="text"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descripcion_aplique">Descripción de Aplique:</label>
        <input
          id="descripcion_aplique"
          name="descripcion_aplique"
          type="text"
          placeholder="Descripción de Aplique"
          value={formData.descripcion_aplique}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color_aplique">Color de Aplique:</label>
        <input
          id="color_aplique"
          name="color_aplique"
          type="text"
          placeholder="Color de Aplique"
          value={formData.color_aplique}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="codigo_apliques">Código de Apliques:</label>
        <input
          id="codigo_apliques"
          name="codigo_apliques"
          type="text"
          placeholder="Código de Apliques"
          value={formData.codigo_apliques}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nom_adorno">Nombre de Adorno:</label>
        <input
          id="nom_adorno"
          name="nom_adorno"
          type="text"
          placeholder="Nombre de Adorno"
          value={formData.nom_adorno}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="num_adorno">Número de Adorno:</label>
        <input
          id="num_adorno"
          name="num_adorno"
          type="text"
          placeholder="Número de Adorno"
          value={formData.num_adorno}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="codigo_picador">Código de Picador:</label>
        <input
          id="codigo_picador"
          name="codigo_picador"
          type="text"
          placeholder="Código de Picador"
          value={formData.codigo_picador}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descripcion_picador">Descripción de Picador:</label>
        <input
          id="descripcion_picador"
          name="descripcion_picador"
          type="text"
          placeholder="Descripción de Picador"
          value={formData.descripcion_picador}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color_picador">Color de Picador:</label>
        <input
          id="color_picador"
          name="color_picador"
          type="text"
          placeholder="Color de Picador"
          value={formData.color_picador}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color_hilo">Color de Hilo:</label>
        <input
          id="color_hilo"
          name="color_hilo"
          type="text"
          placeholder="Color de Hilo"
          value={formData.color_hilo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="numero_hilo">Número de Hilo:</label>
        <input
          id="numero_hilo"
          name="numero_hilo"
          type="number"
          placeholder="Número de Hilo"
          value={formData.numero_hilo}
          onChange={handleChange}
        />
      </div>

      {/* Botón para enviar */}
      <button type="submit">Crear Modelo</button>
    </form>
  );
}

export default FormularioCrearModelo;
