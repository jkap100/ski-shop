import "../App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
//AUTH PAGES
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
//SKI PAGES
// import AllSkisShow from "../pages/skis/AllSkisShow";
// import PowderShow from "../pages/skis/PowderShow";
// import FreestyleShow from "../pages/skis/FreestyleShow";
// import RaceShow from "../pages/skis/RaceShow";
//APPAREL PAGES
// import AllApparelsShow from "../pages/apparel/AllApparelShow";
// import JacketsShow from "../pages/apparel/JacketsShow";
// import PantsShow from "../pages/apparel/PantsShow";
//ACCESSORIES PAGES
// import AllAccessoriesShow from "../pages/accessories/AllAccessoriesShow";
// import GogglesShow from "../pages/accessories/GogglesShow";
// import GlovesShow from "../pages/accessories/GlovesShow";
// import HatsShow from "../pages/accessories/HatsShow";
//INVENTORY PAGES
// import InventoryShow from "../pages/inventory/InventoryShow";
// import NewInventoryOrder from "../pages/inventory/NewInventoryOrder";
// import UpdateInventory from "../pages/inventory/UpdateInventory";

// import ProductDetail from "../pages/ProductDetail";
// import CartShow from "../pages/CartShow";
// import OrderConfirmation from "../pages/OrderConfirmation";
// import Orders from "../pages/Orders";
// import ViewOrder from "../pages/ViewOrder";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  // const location = useLocation();
  // const [error, setErrors] = useState("");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // const [skis, setSkis] = useState([]);
  // const [apparels, setApparels] = useState([]);
  // const [accessories, setAccessories] = useState([]);

  // const [skiCart, setSkiCart] = useState([]);
  // const [skiCartCount, setSkiCartCount] = useState(1);
  // const [apparelCart, setApparelCart] = useState([]);
  // const [apparelCartCount, setApparelCartCount] = useState(1);
  // const [accessoryCart, setAccessoryCart] = useState([]);
  // const [accessoryCartCount, setAccessoryCartCount] = useState(1);

  // const [skiInventory, setSkiInventory] = useState([]);
  // const [apparelInventory, setApparelInventory] = useState([]);
  // const [accessoryInventory, setAccessoryInventory] = useState([]);

  // const [productId, setProductId] = useState([]);
  // const [name, setName] = useState("");
  // const [sku, setSku] = useState("");
  // const [price, setPrice] = useState("");
  // const [cost, setCost] = useState("");
  // const [size, setSize] = useState("");
  // const [category, setCategory] = useState("");
  // const [sex, setSex] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [brand, setBrand] = useState("");
  // const [productCount, setProductCount] = useState("");
  // const [orders, setOrders] = useState([]);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [ccv, setCCV] = useState("");
  // const [expiration, setExpiration] = useState("");
  // const [cardZip, setCardZip] = useState("");
  // const [createdAt, setCreatedAt] = useState("");
  // const [viewOrder, setViewOrder] = useState("");

  // const [viewProduct, setViewProduct] = useState("");

  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredSkis = skis.filter((ski) => {
  //   return (
  //     ski.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     ski.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     ski.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  // const filteredApparel = apparels.filter((apparel) => {
  //   return (
  //     apparel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     apparel.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     apparel.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  // const filteredAccessories = accessories.filter((accessory) => {
  //   return (
  //     accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     accessory.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     accessory.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  // const onViewSki = (ski) => {
  //   // console.log("viewSki");
  //   fetch(`http://localhost:3000/skis/${ski.id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then(setViewProduct);
  //       // navigate("/product_detail");
  //       <Navigate to="/product_detail" />;
  //     } else {
  //       r.json().then((error) => setErrors(error.errors));
  //       // navigate("/login");
  //       <Navigate to="/login" />;
  //     }
  //   });
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
