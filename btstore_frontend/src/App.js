import './App.css';
import {Link,Switch,Route,useParams, Routes} from 'react-router-dom'
import Login from './auth/LoginPage.js'; 
import createNewUser from './auth/SignupPage.js';


import ShoppingPage from './user/shoppingPage.js';
import SingleProductPage from './user/singleProductPage.js';
import ProfilePageUser from './user/profilePageUser.js';
import OrderPage from './user/orderPage.js';
import PaymentPage from './user/paymentPage.js';

import Dashboard from './artist/Dashboard.js';
import ProductPage from './artist/productPage.js';
import CreateNewProduct from './artist/createNewProduct.js';
import ProfilePageArtist from './artist/profilePageArtist.js';
function App() {
  return (
    <div className="App">

      <div className='container'>
        <div className='row'>
        <Routes>
          <Route path="/" exact Component={Login}/>
          <Route path='/createNewUser' Component={createNewUser}/>
          
          <Route path='/shoppingPage' Component={ShoppingPage}/>
          <Route path='/singleProductPage' Component={SingleProductPage}/>
          <Route path='/profilePageUser' Component={ProfilePageUser}/>
          <Route path='/orderPage' Component={OrderPage}/>
          <Route path='/paymentPage' Component={PaymentPage}/>

          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/productPage' Component={ProductPage}/>
          <Route path='/createNewProduct' Component={CreateNewProduct}/>
          <Route path='/profilePageArtist' Component={ProfilePageArtist}/>

        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
