import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="productCard">
      <img src="src/assets/Images/test-image1.jpg" alt="" />
      <h4>Кручёный зефир Самокат, с начинкой клюква </h4>
      <div className="priceTag">
        <p>200 ₽</p>
      </div>
    </div>
  );
}

export default ProductCard;
