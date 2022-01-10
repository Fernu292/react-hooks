import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css';

import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information  from "../containers/Information";
import Payment from "../containers/Payment";
import NotFound from "../containers/NotFound";
import Success from "../containers/Success";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/checkout" element = {<Checkout />} />
          <Route exact path = "/checkout/information" element = {<Information />} />
          <Route exact path = "/checkout/payment" element = {<Payment />} />
          <Route exact path = "/checkout/success" element = {<Success />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
