import React, { useState, useEffect } from "react";
import { Modal, Box, Button, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState();
  const [searchItem, setSearchItem] = useState('');



  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);







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
      }
       catch (error) 
       {
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
    return (
      <>
       Loading...
       
      </>
    );
  };



  const handleSearch = ({ target: { value } }) => {
    const query = value.toLowerCase();
    setSearchItem(query);

    setFilter(query ? data.filter(({ title }) => title.toLowerCase().includes(query)) : data);
  };
  


  const filterProduct = (cat) => {
    const updatedList = data.filter((product) => product.category === cat);
    setFilter(updatedList);
  };






  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">

          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("beauty")}>Beauty Products</button>

      <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("furniture")}>Furniture</button>
  
   <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("groceries")}>Food</button>

                 <button className="btn btn-outline-dark" onClick={() => filterProduct("fragrances")}>Fragrances</button>
        </div>


        <div className="row">
                                {filter.map((product) => (

            <div className="col-md-3 mb-4" key={product.id}>
                                 <div className="card h-100 text-center p-4">

                       <img src={product.thumbnail} className="card-img-top" alt={product.title} height="200px" />
                <div className="card-body">

                 
                  <h5 className="card-title">{product.title.substring(0, 12)}</h5>
       
       <p className="card-text fw-bold">Price: ${product.price}</p>



                  <Button variant="contained" color="primary" onClick={() => handleOpen(product)}>View</Button>
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

        <div className="col d-flex justify-content-between align-items-center text-color-red" >

                            <h1>Latest Products  </h1>

     <div className="search  me-3">

            <TextField variant="outlined"   size="small"   placeholder="Search here..."   value={searchItem}    onChange={handleSearch}  />


            <IconButton>
<SearchIcon/>
            </IconButton>

                </div>
        </div>
        </div>
               

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>


      <Modal
        open={open}

        onClose={handleClose}

        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description" >
      
        <Box sx={{orientation:"vertical", position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 650, bgcolor: 'background.paper', border: '10px solid #000', boxShadow: 70, p: 3 }}>
          {selectedProduct && (
            <>

              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title: {selectedProduct.title}
 </Typography>

                      <img src={selectedProduct.thumbnail} alt={selectedProduct.title} height="290px" width="550px" />    


            <Typography id="modal-modal-dimensions" sx={{ mt: 2 }}>
                Dimensions: "width": {selectedProduct.dimensions.width}, "height": {selectedProduct.dimensions.height},  "depth": {selectedProduct.dimensions.depth}
            </Typography>

                                    <Typography sx={{ mt: 2 }}>
                                     Warranty: {selectedProduct.warrantyInformation}
                                  </Typography>
            

            <Typography sx={{ mt: 2 }}>
                Shipping: {selectedProduct.shippingInformation}
                          </Typography>

                    <Typography sx={{ mt: 2 }}>
                               Availability: {selectedProduct.availabilityStatus}
                                     </Typography>


                                          <Typography sx={{ mt: 2 }}>
                Return Policy: {selectedProduct.returnPolicy}
                              </Typography>

                           <Typography sx={{ mt: 2 }}>
                                  Minimum Order Quantity: {selectedProduct.minimumOrderQuantity}
                                 </Typography>

                              <Typography sx={{ mt: 2 }}>
                                       Barcode: {selectedProduct.meta.barcode}
                                   </Typography>

                                       <Typography sx={{ mt: 2 }}>
                                               QR Code: <img src={selectedProduct.meta.qrCode} alt="QR Code" />
                        </Typography>

                                     <Typography sx={{ mt: 2 }}>
                Reviews:
                <ul>


                  
                    {selectedProduct.reviews.map((review, index) => (
                     <li key={index}>
                      

                                     <strong>Rating: </strong> {review.rating} <br />

                                                 <strong>Comment: {review.comment} </strong>  <br />

                            <strong>Date:</strong> {new Date(review.date).toLocaleDateString()} <br />


                               <strong>ReviewerName: {review.reviewerName} </strong>
                                         
                   <strong>reviewerEmail: {review.reviewerEmail} </strong>


                        </li>
                    ))}
                </ul>
                
            </Typography>

            </>
          )}
        </Box>
              </Modal>
    </div>
     );
              };

export default Product;

