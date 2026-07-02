const Producto = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
return (
    <div className="tarjeta-interactiva"
    style={{
        
        backgroundColor: "var(--papel2)",
        border: "1px solid var(--linea)",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        width: "220px",
        fontFamily: "var(--fuente-cuerpo)",
        display: 'flex',
        flexDirection: 'column',
    }}
    >
    <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "4px",
        marginBottom: "15px",
        }}
    />
    <h3
        style={{
        fontFamily: "var(--fuente-titulares)",
        fontWeight: 600,
        marginBottom: "5px",
        }}
    >
        {producto.nombre}
    </h3>
    <p
        style={{
        fontFamily: "var(--fuente-tecnica)",
        color: "var(--tinta)",
        fontSize: "0.85rem",
        marginBottom: "15px",
        opacity: 0.7,
        }}
    >
        {producto.categoria}
    </p>
    <p
        style={{
            
        color: "var(--arcilla)",
        fontWeight: "700",
        fontSize: "1.4rem",
        fontFamily: "var(--fuente-cuerpo)",
        marginBottom: "15px",
        marginTop: 'auto',
        }}
    >
        ${producto.precio.toLocaleString()} COP
    </p>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
        
        <button 
        onClick={quitarDelCarrito}
        style={{
            backgroundColor: 'var(--tinta)', 
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'var(--fuente-cuerpo)', 
            fontWeight: 800,
        }}>
        -
        </button>

        <span style={{ 
        fontWeight: '800', 
        fontSize: '1.2rem', 
        color: 'var(--tinta)',
        minWidth: '20px'
        }}>
        {producto.cantidad}
        </span>

        <button 
        onClick={agregarAlCarrito} 
        style={{
            backgroundColor: 'var(--arcilla)', 
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'var(--fuente-cuerpo)', 
            fontWeight: 800,
        }}>
        +
        </button>
    </div>
    
    </div>
);
};

export default Producto;
