import CardItem from "../components/CardItem";
import React from "react";

function Home({ items }) {
    const libros = [];
    return (
        <div className="container bg-primary">
            <h2>Libros Disponibles</h2>
            <div className="row">
                {libros.map((libro, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                        <CardItem {...libro} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
