import './App.css';
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Categories />
      <ProductGrid /> */}
      <Checkout />
    </div>
  );
}

export default App;
