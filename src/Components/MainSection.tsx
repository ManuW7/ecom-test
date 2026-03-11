import "./MainSection.css";
import ProductCard from "./ProductCard";

function MainSection() {
  return (
    <main>
      <div className="productsContainer">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}

export default MainSection;
