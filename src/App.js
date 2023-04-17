import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './My_Components/Home';
import Login from './My_Components/Login'
import SignUp from './My_Components/SignUp'
import Contact from './My_Components/Contact';
import Cart from './My_Components/Cart';
import Profile from './My_Components/Profile'
import { reducer } from '../src/My_Components/reducer'
import { useState, useReducer, createContext } from 'react';
import PrivacyPolicy from './My_Components/PrivacyPolicy';
import Checkout from './My_Components/Checkout';
import AddressForm from './My_Components/AddressForm';
import OrderCompleted from './My_Components/OrderCompleted';
import ContactCompleted from './My_Components/ContactCompleted';

export const CURR_ORDER = createContext();
function App() {


  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const intialOrders = []

  const [order, dispatch] = useReducer(reducer, intialOrders)
  const addOrder = (id) => {

    return dispatch({
      type: "ADD_ORDER",
      payload: id
    })

  }
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp setName={setName} setEmail={setEmail
          } setLastName={setLastName} />} />
          <Route path="Profile" element={<Profile name={name} email={email} lastName={lastName} />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="AddressForm" element={<AddressForm />} />
          <Route path="OrderCompleted" element={<OrderCompleted />} />
          <Route path="ContactCompleted" element={<ContactCompleted />} />

        </Routes>

      </BrowserRouter>

    </>

  );
}

export default App;
