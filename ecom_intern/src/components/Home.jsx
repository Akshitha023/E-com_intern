import React from 'react';
import Product from './Product';


const Home= ()=>  {
  return (
    <div className = "home">
      <div className="card text-bg-white">
  <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg" className="card-img" />
  <div className="card-img-overlay">
    <h5 className="card-title "> Big News</h5>
    <p className="card-text">  The Best Sale to shop this weekend </p>
    <p className="card-text"> New season Arrivals are here! Checkout the Trends </p>
  </div>
</div>
<div>
<Product />
</div>

    </div>
  );
}

export default Home;