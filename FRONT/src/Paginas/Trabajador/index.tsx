import React, { useState } from 'react';
import './index.css'; 

const areas = [
    {
        name: 'Área de Cortado',
        description: 'Corte de cuero',
        status: 'En espera',
        issue: 'Mal estado',
        imgSrc: './Cortado.jpg'
    },
    {
        name: 'Área de Desvastado',
        description: 'Desbaste de bordes',
        status: 'En espera',
        issue: 'Mal estado',
        imgSrc: './Devastado.jpg'
    },
    {
        name: 'Área de Perfilado',
        description: 'Perfilado de bordes',
        status: 'En espera',
        issue: 'Mal estado',
        imgSrc: './Perfilado.jpg'
    },
    {
        name: 'Área de Armado',
        description: 'Ensamblaje de partes',
        status: 'En espera',
        issue: 'Mal estado',
        imgSrc: './Armado.jpg'
    },
    {
        name: 'Área de Alistado',
        description: 'Verificación final',
        status: 'En espera',
        issue: 'Mal estado',
        imgSrc: './Alistado.jpg'
    },
];

const Trabajador = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAreas, setFilteredAreas] = useState(areas);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredAreas(
            areas.filter((area) => area.name.toLowerCase().includes(value))
        );
    };

    return (
        <div className="area-list-container">
            <h1 className="title">Gestión de Áreas</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Buscar área..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="area-cards">
                {filteredAreas.map((area, index) => (
                    <div key={index} className="area-card">
                        <img src={area.imgSrc} alt={area.name} className="area-image" />
                        <div className="area-details">
                            <h2 className="area-name">{area.name}</h2>
                            <p className="area-description">{area.description}</p>
                            <p className="area-status">{area.status}</p>
                            <p className="area-issue">{area.issue}</p>
                        </div>
                    </div>
                ))}
                {filteredAreas.length === 0 && (
                    <div className="area-card">
                        <h2 className="area-name">Área no encontrada</h2>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Trabajador;
