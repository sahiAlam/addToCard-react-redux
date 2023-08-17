import products from "./products.json";
import Product from "./components/Product";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
