import React, { useEffect, useState, useMemo } from "react";
import "../styles/Home.css";
import Product from "./Products";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function Home({ search }) {
    console.log(search);
    const [productos, setProductos] = useState([]);
    
    const lista = useMemo(() => productos.filter((p)=> p.title.toLowerCase().includes(search.toLowerCase())), [productos, search])


  useEffect(() => {
    async function getProductos() {
      const productsCol = collection(db, "productos");
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => doc.data());
      setProductos(productList);
      console.log(productList);
    }
    getProductos();
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-row">
          {lista.map((p) => (
            <Product
              key={p.sku}
              id={p.sku}
              image={p.image}
              title={p.title}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
