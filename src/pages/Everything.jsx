import { Link } from 'react-router-dom';

const Everything = () => {
  const linkStyle = { color: '#00dfd8', margin: '0 20px', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' };
  return (
    <nav style={{ padding: '25px', background: '#000', borderBottom: '1px solid #222', textAlign: 'center' }}>
      <Link to="/home" style={linkStyle}>Главная</Link>
      <Link to="/contacts" style={linkStyle}>О нас</Link>
      <Link to="/photo" style={linkStyle}>Фотографии</Link>
      <Link to="/services" style={linkStyle}>Услуги</Link>
      <Link to="/footer" style={linkStyle}>Меню</Link>
    </nav>
  );
};

export default Everything;