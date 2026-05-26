import React from 'react';

export default function Header({ cantidadCarrito }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white', alignItems: 'center' }}>
      <h1>Mi Tienda Online</h1>
      <div>
        🛒 Carrito: <strong>{cantidadCarrito}</strong> artículos
      </div>
    </header>
  );
}