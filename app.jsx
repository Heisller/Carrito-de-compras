import React, { useState, useEffect } from 'react';
import { productosData } from './data/productos';
import Header from './components/Header';
import Filtros from './components/Filtros';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';

export default function App() {
  // 1. Estado para el carrito (Inicializado desde LocalStorage si existe)
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito_react');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // 2. Estados para la búsqueda y filtrado
  const [buscar, setBuscar] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  // 3. useEffect para guardar en LocalStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('carrito_react', JSON.stringify(carrito));
  }, [carrito]);

  // 4. Lógica de filtrado combinada (map y filter)
  const productosFiltrados = productosData.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(buscar.toLowerCase());
    const coincideCategoria = categoria === 'Todos' || producto.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  // 5. Funciones para gestionar el carrito
  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      if (existe) {
        // Si ya existe, aumentamos la cantidad
        return prevCarrito.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si es nuevo, lo agregamos con cantidad 1
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (id, incremento) => {
    setCarrito(prevCarrito => 
      prevCarrito.map(item => {
        if (item.id === id) {
          const nuevaCantidad = item.cantidad + incremento;
          // Evita que la cantidad baje de 1
          return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : item;
        }
        return item;
      })
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  // Cantidad total de productos para el Header
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header cantidadCarrito={totalArticulos} />
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <Filtros 
          buscar={buscar} 
          setBuscar={setBuscar} 
          categoria={categoria} 
          setCategoria={setCategoria} 
        />
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap-reverse' }}>
          <ListaProductos 
            productos={productosFiltrados} 
            agregarAlCarrito={agregarAlCarrito} 
          />
          <Carrito 
            carrito={carrito} 
            cambiarCantidad={cambiarCantidad} 
            eliminarDelCarrito={eliminarDelCarrito} 
          />
        </div>
      </main>
    </div>
  );
}