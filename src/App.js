import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from '../src/Product/productList';


function App() {
  const [isOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button>Add Product</button>
      <ProductList />
    </div>
  );
}

export default App;
