import { Provider } from 'react-redux';
import './App.css';
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Categories />
        <ProductGrid />
        {/* <Checkout /> */}
      </div>
    </Provider>
  );
}

export default App;
