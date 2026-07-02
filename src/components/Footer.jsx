const Footer = () => {
return (
    <footer style={{
    backgroundColor: 'var(--tinta)', 
    color: 'white',
    padding: '30px',
    textAlign: 'center',
    marginTop: '40px',
    borderTop: '2px solid var(--musgo)', 
    fontFamily: 'var(--fuente-cuerpo)', 
    }}>
    <p style={{ fontWeight: 400, opacity: 0.8 }}>2026 ReVuelta | CESDE.</p>
    <p style={{
        marginTop: '10px',
        fontFamily: 'var(--fuente-tecnica)', 
        color: 'var(--calendula)' 
    }}>Alejandro Aristizábal Londoño</p>
    </footer>
);
};

export default Footer;