import type { Product } from "../assets/data";
import "./ProductModal.css";

interface ModalProps {
  product: Product;
  setChosenItem: React.Dispatch<React.SetStateAction<Product | null>>;
}

function ProductModal({ product, setChosenItem }: ModalProps) {
  return (
    <div className="productModal">
      <div className="modalContent">
        <img src={`${product.image}`} alt="" />
        <div className="productInfo">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
