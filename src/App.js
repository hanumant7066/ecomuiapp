import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import AddProduct from './pages/addProduct/AddProduct';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Banner />
        <AddProduct />
      </div>
      <Footer />
    </div>
  );
}

export default App;
