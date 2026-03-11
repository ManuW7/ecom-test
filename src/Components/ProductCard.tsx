import type { Product } from "../assets/data";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  setChosenItem: React.Dispatch<React.SetStateAction<Product | null>>;
}

function ProductCard({ product, setChosenItem }: ProductCardProps) {
  return (
    <div className="productCard" onClick={() => setChosenItem(product)}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <div className="priceTag">
        <p>{product.price} ₽</p>
      </div>
    </div>
  );
}

export default ProductCard;
