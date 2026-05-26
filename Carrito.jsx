import React from 'react';

export default function Carrito({ carrito, cambiarCantidad, eliminarDelCarrito }) {
  // Constantes de cálculo
  const TASA_IMPUESTO = 0.12; // Ejemplo: 12% de IVA
  
  const subtotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const impuestos = subtotal * TASA_IMPUESTO;
  const total = subtotal + impuestos;

  return (
    <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '1rem', background: '#f9f9f9', flex: '1', minWidth: '280px' }}>
      <h2>Tu Carrito</h2>
      
      {/* Renderizado Condicional */}
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
            {carrito.map(item => (
              <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{item.nombre}</span>
                  <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <button onClick={() => cambiarCantidad(item.id, -1)} style={{ padding: '2px 8px' }}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.cantidad}</span>
                    <button onClick={() => cambiarCantidad(item.id, 1)} style={{ padding: '2px 8px' }}>+</button>
                  </div>
                  <button 
                    onClick={() => eliminarDelCarrito(item.id)} 
                    style={{ background: '#dc3545', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sección de Totales */}
          <div style={{ borderTop: '2px solid #333', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Impuestos (12%):</span>
              <span>${impuestos.toFixed(2)}</span>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}