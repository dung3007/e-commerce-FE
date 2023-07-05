import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Switch, Route, Navigate  } from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:category' element={<ProductList />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/login' element={user ? <Navigate  to='/' /> : <Login />}></Route>
        <Route path='/register' element={user ? <Navigate  to='/' /> : <Register />}></Route>
      </Routes>

      {/* <div className=""> */}
       {/* <Home /> */}
       {/* <ProducrList /> */}
       {/* <Product /> */}
       {/* <Register /> */}
       {/* <Login /> */}
       {/* <Cart /> */}
     {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
