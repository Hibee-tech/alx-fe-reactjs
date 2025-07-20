import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
      }}
    >
      <div style={{ fontWeight: 'bold' }}>My Company</div>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '15px' }}>About</Link>
        <Link to="/services" style={{ color: 'white', marginRight: '15px' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

