import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Product from './components/Product';


function App  ()  {
 return (
<>
<Navbar/>
<Home/>
{/* <Product/> */}

</>

 )
};


export default App;











// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Product from "./Product";
// import SingleProduct from "./SingleProduct";
// import Contact from "./Contact";
// import Cart from "./Cart";


//  const App = () => {

//    const theme ={
//     colors:{
//       bg:"#000" ,
//     },
//    };


//   return <Router>

//      <Routes> 

//          <Route path="/" element={<Home /> }/>
//          <Route path="/about" element={<About /> }/> 
//          <Route path="/product" element ={<Product/>} />
//          <Route path="/contact" element ={< Contact/>} />
//          <Route path="/singleproduct/:id" element ={<SingleProduct/>} />
//          <Route path="/cart" element={<Cart />}/> 

         
//      </Routes>
//   </Router>;

  
// };

// export default App;
