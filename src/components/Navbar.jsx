const Navbar = ({ cantidadCarrito }) => {
    return (
    <nav style={{
    backgroundColor: 'var(--tinta)', 
    color: 'var(--calendula)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--linea)',
    }}>
    <h2 style={{
        fontFamily: 'var(--fuente-titulares)',
        fontWeight: 800,
        letterSpacing: '-1px'
    }}>La Chasquería</h2>
    <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        fontFamily: 'var(--fuente-cuerpo)', 
        fontWeight: 500
    }}>
        <li style={{ cursor: 'pointer' }}>Inicio</li>
        <li style={{ cursor: 'pointer' }}>Tienda</li>
        <li style={{
        backgroundColor: 'var(--calendula)', 
        color: 'var(--tinta)',
        padding: '5px 15px',
        borderRadius: '20px',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
        }}>
        🛒 {cantidadCarrito}
        </li>
    </ul>
    </nav>
);
};

export default Navbar;