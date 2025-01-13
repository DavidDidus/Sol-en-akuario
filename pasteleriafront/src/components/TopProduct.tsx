import React, { useEffect } from "react";
import { motion } from "framer-motion";	
import { useNavigate } from "react-router-dom";
import cupcakecerebro from "../images/Cupcakes/cupcakecerebro.jpg";
import galletas from "../images/galletas.jpg";
import focachia from "../images/Focaccia/focachia.jpg";
import tartaleta from "../images/tartaleta.jpg";


const TopProduct: React.FC = () => {

    const history = useNavigate();
    const [initialLoad, setInitialLoad] = React.useState(true);

    const handleImageClick = (path: string) => {
        history(path);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialLoad(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section style={{ 
            textAlign: "center" ,
            }}>
        {/* Animación del título */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ maxWidth: "auto", margin: "0 auto" }}
            >
        
            <h2 style={{ fontSize: "2rem", color: "#6A4844" }}>Productos Destacados</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
                { name: "Cupcake de Cerebro", image: cupcakecerebro, price: "$12.000",path: "/productos/cookie" },
                { name: "Galletas", image: galletas, price: "$15.000", path: "/productos/cookie" },
                { name: "Focaccia", image: focachia, price: "$8.000",path: "/productos/focaccia" },
                { name: "Tartaleta", image: tartaleta, price: "$10.000", path: "/productos/tartaleta" },
             
                
            ].map((product, index) => (
            <div key={index} style={{ textAlign: "center", maxWidth: "200px" }}>
            <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={initialLoad ? {duration: 1,delay: index * 0.5 } : {}}
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem",cursor: "pointer", padding: "0.5rem" }}
                onClick={() => handleImageClick(product.path)}
            />
            <h3 style={{ color: "#C17E5F" }}>{product.name}</h3>
            <p style={{ color: "#777E85" }}>{product.price}</p>
        </div>
        ))}
    </div>
    </motion.div>
    </section>

    );
    }

    export default TopProduct;