import React from 'react';

export default function TarjetaProducto({ producto, agregarAlCarrito }) {
  const { nombre, precio, categoria, imagen } = producto;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={imagen} alt={nombre} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{nombre}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{categoria}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#007bff' }}>${precio.toFixed(2)}</p>
      <button 
        onClick={() => agregarAlCarrito(producto)}
        style={{ background: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}