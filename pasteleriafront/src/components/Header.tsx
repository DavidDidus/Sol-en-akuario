import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header style={{ position: 'relative'}} >
            <nav>
                <ul style={{ justifyContent: 'center',display: 'flex', listStyle: 'none', gap: '1rem', padding: 0,fontFamily: "Raleway", }}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
