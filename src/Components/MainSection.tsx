import "./MainSection.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import type { Product } from "../assets/data";
import ProductModal from "./ProductModal";

function MainSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [chosenProduct, setChosenProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <div className="productsContainer">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setChosenItem={setChosenProduct}
          />
        ))}
      </div>
      {chosenProduct ? (
        <ProductModal
          product={chosenProduct}
          setChosenItem={setChosenProduct}
        ></ProductModal>
      ) : null}
    </main>
  );
}

export default MainSection;
