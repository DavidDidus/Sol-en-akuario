import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import ProductList from './components/ProductList/ProductList.tsx';
import HeroSection from './components/Home.tsx';
import About from './components/About.tsx';


const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/productos" element={<ProductList />} />
                <Route path="/sobre-nosotros" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
