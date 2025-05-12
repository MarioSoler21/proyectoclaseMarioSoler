import CardItem from "../components/CardItem";

function Home({ items }) {
    return (
        <div className="container bg-primary text-white py-5">
            <div className="row">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <CardItem 
                                title={item.title} 
                                description={item.description} 
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center">Este es un texto de ejemplo. Texto textoexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto teexto te texto texto texto.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
