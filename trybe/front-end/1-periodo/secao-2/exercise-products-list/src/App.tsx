import "./App.css";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import Products from "./data";

function App() {
  return (
    <div className="App">
      <ProductsList>
        {Products.map((product) => (
          <Product key={product.id} productInfo={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default App;
