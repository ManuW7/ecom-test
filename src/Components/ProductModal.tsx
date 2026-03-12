import { useEffect } from "react";
import type { Product } from "../assets/data";
import "./ProductModal.css";

interface ModalProps {
  product: Product;
  setChosenItem: React.Dispatch<React.SetStateAction<Product | null>>;
}

function ProductModal({ product, setChosenItem }: ModalProps) {
  function handleEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setChosenItem(null);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="productModal" onClick={() => setChosenItem(null)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="exitButton" onClick={() => setChosenItem(null)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <img src={`${product.image}`} alt="" />
        <div className="productInfo">
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} ₽</p>
          </div>

          <button className="buyButton">Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
