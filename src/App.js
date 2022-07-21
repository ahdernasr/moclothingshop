import DiscountBar from "./components/DiscountBar.js";
import Navbar from "./components/Navbar.js";
import DiscoverSection from "./components/DiscoverSection.js";
import SloganSection from "./components/SloganSection.js";
import ReleasesSection from "./components/ReleasesSection.js";
import EmailSection from "./components/EmailSection.js";
import Footer from "./components/Footer.js";
import Tops from "./components/Tops.js"
import Bottoms from "./components/Bottoms.js"
import Accessories from "./components/Accessories.js"
import Sale from "./components/Sale.js"
import Items from "./components/Items.js"
import Basket from "./components/Basket.js"
import InfoBar from "./components/InfoBar.js"
import Contact from "./components/Contact.js"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [ basketItemsArray, setBasketItemsArray] = useState([]);

  return (
    <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <DiscountBar />
        <Navbar />
        <InfoBar />
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <>
                <DiscoverSection />
                <SloganSection />
                <ReleasesSection />
              </>
            }
          ></Route>
          <Route path="/tops" element={<Tops />}></Route>
          <Route path="/bottoms" element={<Bottoms />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/sale" element={<Sale />}></Route>
          <Route path="/items/:itemId" element={<Items basketItemsArray={basketItemsArray} setBasketItemsArray={setBasketItemsArray}/>}></Route>
          <Route path="/basket" element={<Basket basketItemsArray={basketItemsArray} setBasketItemsArray={setBasketItemsArray}/>}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
        </Routes>
        <EmailSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
