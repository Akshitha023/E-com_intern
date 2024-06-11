import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";


const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        if (componentMounted) {
          setData(products.products);

          setFilter(products.products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching the products", error);
      
        setLoading(false);
      }
    };
    getProduct();




    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return 
    <><div classNae="col-md-3">
      <Skeleton height={360}/>
        
    </div>
    
    </>;
  };



  const filterProduct = (cat) => {
    const updatedList = data.filter((product) => product.category === cat);
    setFilter(updatedList);
  };
  


  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center ">
          <button className="btn btn-outline-dark  w-30  me-5"  onClick={() =>filterProduct("beauty")}>  Beauty Products</button>


 <button className="btn btn-outline-dark  w-30  me-5" onClick={() =>filterProduct("furniture")}> Furniture</button>  
          
  <button className="btn btn-outline-dark w-30  me-5 "  onClick={() => filterProduct("groceries")}>Food </button>
          <button className="btn btn-outline-dark w-30  me-5 " onClick={() => filterProduct("fragrances")}> Fragrances</button>



        </div>
        <div className="row">
          {filter.map((product) => (

            <div className="col-md-3 mb-7 mb-4" key={product.id}>

              <div className="card h-100 text-center p-4">

                <img src={product.thumbnail} className="card-img-top" alt={product.title} height="200px" />
                
                <div className="card-body">


    <h5 className="card-title"> {product.title.substring(0,12)}</h5>
         
          
           
          <p className="card-text fw-bold"> Price: ${product.price}</p>

                  <a href="#" className="btn btn-primary"  >Buy Now Only Few Left!</a>
                </div>
              </div>


            </div>
          ))}

        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Product;






















