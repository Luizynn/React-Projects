
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

import { AppCartContext } from './store/shopping-cart-context.jsx';
import Product from './components/Product.jsx';

function App() {

  return (
    <AppCartContext>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
        ))}
      </Shop>  
    </AppCartContext>
  );
}

export default App;
