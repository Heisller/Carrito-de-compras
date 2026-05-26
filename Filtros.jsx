import React from 'react';

export default function Filtros({ buscar, setBuscar, categoria, setCategoria }) {
  return (
    <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Buscar producto por nombre..."
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        style={{ padding: '0.5rem', flex: '1', minWidth: '200px' }}
      />
      
      <select 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)}
        style={{ padding: '0.5rem' }}
      >
        <option value="Todos">Todas las Categorías</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Calzado">Calzado</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Ropa">Ropa</option>
      </select>
    </div>
  );
}