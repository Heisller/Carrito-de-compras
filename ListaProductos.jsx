import React from 'react';
import TarjetaProducto from './TarjetaProducto';

export default function ListaProductos({ productos, agregarAlCarrito }) {
  if (productos.length === 0) {
    return <p>No se encontraron productos que coincidan con la búsqueda.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', flex: '3' }}>
      {productos.map(producto => (
        <TarjetaProducto 
          key={producto.id} 
          producto={producto} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      ))}
    </div>
  );
}