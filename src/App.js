import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/account/accountCreateView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import CartView from './views/cartVie';
import CartCheckoutView from './views/cart/cartCheckoutView';
import CartListView from './views/cart/cartListView';
import CartPaymentView from './views/cart/cartPaymentView';
import DashboardView from './views/dashboardView';
import OrderView from './views/orderView';
import OrderDetailsView from './views/order/orderDetailsView';
import OrderListView from './views/order/orderListView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import TravelView from './views/travelView';
import TravelDetailsView from './views/travel/travelDetailsView';
import TravelListView from './views/travel/travelListView';
import WelcomeView from './views/welcomeView';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/cart" element={<CartView/>}/>
            <Route exact path="/cart/checkout" element={<CartCheckoutView/>}/>
            <Route exact path="/cart/list" element={<CartListView/>}/>
            <Route exact path="/cart/payment" element={<CartPaymentView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/order" element={<OrderView/>}/>
            <Route exact path="/order/details/*">
              <Route path=":id" element={<OrderDetailsView/>}/>
            </Route>
            <Route exact path="/order/list" element={<OrderListView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
            <Route exact path="/travel" element={<TravelView/>}/>
            <Route exact path="/travel/details/*">
              <Route path=":id" element={<TravelDetailsView/>}/>
            </Route>
            <Route exact path="/travel/list" element={<TravelListView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
