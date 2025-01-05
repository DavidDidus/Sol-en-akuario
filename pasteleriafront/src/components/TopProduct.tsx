import React from "react";
import { motion } from "framer-motion";	
import cupcakecerebro from "../images/cupcakecerebro.jpg";
import galletas from "../images/galletas.jpg";
import focachia from "../images/focachia.jpg";

const TopProduct: React.FC = () => {
    return (
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        {/* Animación del título */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ maxWidth: "900px", margin: "0 auto" }}
            >
        
            <h2 style={{ fontSize: "2rem", color: "#6A4844" }}>Productos Destacados</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
                { name: "Cupcake de Cerebro", image: cupcakecerebro, price: "$12.000" },
                { name: "Galletas", image: galletas, price: "$15.000" },
                { name: "Focaccia", image: focachia, price: "$8.000" },
            ].map((product, index) => (
            <div key={index} style={{ textAlign: "center", maxWidth: "200px" }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
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