import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProduct } from './api';
import product from './product';
import Product from './product';
import './product.css';


const ProductList = () => {

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await getAllProduct();
            console.log(response);
            setProductData(response);
        }
        fetchMyAPI()
    }, []);
    return (<div>
        <div className="flexDiv" style={{ backgroundColor: "lightblue" }}>
            <div className="row">Name</div>
            <div className="row">Description</div>
            <div className="row">Price</div>
            <div className="row">Stock</div>
        </div>
        {productData && productData.length > 0 && productData.map(product => (
            <Product name={product.name} price={product.price} stock={product.price} desc={product.desc} ></Product>
        ))
        }
    </div >);
}
export default ProductList;