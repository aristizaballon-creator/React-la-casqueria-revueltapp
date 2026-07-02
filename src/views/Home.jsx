import { useState } from 'react';
import Navbar from '../components/Navbar';
import Producto from '../components/Producto';
import Footer from '../components/Footer';

import imgEngland from '../assets/England.jpg';
import imgBoca from '../assets/Boca.jpg';
import imgJapan from '../assets/Japan.jpg';
import imgArsenal from '../assets/Arsenal.Webp';

const datosSimuladosIniciales = [
{ id: 1, nombre: "Camiseta ENGLAND HOME 1998", precio: 45000, categoria: "Categoría: Europa (Lote A2)", imagen: imgEngland, cantidad: 0 },
{ id: 2, nombre: "Camiseta Boca Jr visitante 1992-93", precio: 35000, categoria: "Categoría: Latinoamerica (Lote B5)", imagen: imgBoca, cantidad: 0 },
{ id: 3, nombre: "Camiseta Japan Away 1998", precio: 20000, categoria: "Categoría: Asia (Lote C1)", imagen: imgJapan, cantidad: 0 },
{ id: 4, nombre: "Camiseta Arsenal Oversize", precio: 25000, categoria: "Categoría: Camisetas Arsenal (Lote D3)", imagen: imgArsenal, cantidad: 0 }
];

const Home = () => {

const [productos, setProductos] = useState(datosSimuladosIniciales);

const cambiarCantidad = (id, incremento) => {
    setProductos(productos.map(producto => {
    if (producto.id === id) {
        const nuevaCantidad = producto.cantidad + incremento;
        return { ...producto, cantidad: nuevaCantidad >= 0 ? nuevaCantidad : 0 };
    }
    return producto;
    }));
};

const manejarAgregarAlCarrito = (id) => {
    cambiarCantidad(id, 1);
};


const totalCarrito = productos.reduce((total, producto) => total + producto.cantidad, 0);

return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar cantidadCarrito={totalCarrito}/>

    <main style={{ padding: '40px 20px', flex: '1' }}>
        <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        fontFamily: 'var(--fuente-titulares)', 
        fontWeight: 800,
        fontSize: '2.8rem',
        color: 'var(--tinta)' 
        }}>Chascas vintage</h1>
        
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {productos.map((producto) => (
            <Producto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={() => manejarAgregarAlCarrito(producto.id)}
            quitarDelCarrito={() => cambiarCantidad(producto.id, -1)}
            />
        ))}
        </div>
    </main>

    <Footer />
    </div>
);
};

export default Home;