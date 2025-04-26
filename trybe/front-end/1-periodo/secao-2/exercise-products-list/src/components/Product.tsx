import { ProductType } from "../types";

type ProductProps = {
  productInfo: ProductType;
};

function Product({ productInfo }: ProductProps) {
  const { title, image, price } = productInfo;

  return (
    <li className="product">
      <div>
        <p>{title}</p>
        <p>R${price}</p>
      </div>
      <img src={image} alt={title} />
    </li>
  );
}

export default Product;
