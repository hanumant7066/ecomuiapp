import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
// import MainHtml from './css_tut/MainHtml';
import AddProduct from './pages/addProduct/AddProduct';
import ProductList from './pages/productList/ProductList';

function App() {

  return (
    <div className="App">
      {/* <MainHtml /> */}

      <Header />
      <div className="content-wrapper">
        <Banner />
        <AddProduct />
        <ProductList />
        <ProductList />


      </div>
      <Footer />

    </div>
  );
}

export default App;
