import { Provider } from 'react-redux';
import './App.css';
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import store from "./store/store";

function App() {
  return (
      <div className="App">
        <Header />
      </div>
  );
}

export default App;
