import React from 'react';
import Home from "./components/home"
import store from "./store/store";
import { Provider } from "react-redux";

import './App.css';

function App() {
  return (
    <Provider store={store}><Home /></Provider>
  );
}

export default App;
