import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ProductGrid />
    </div>
  );
}

export default App;
