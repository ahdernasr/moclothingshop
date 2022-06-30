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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <DiscountBar />
        <Navbar />
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
          <Route path="/items" element={<Items />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
        <EmailSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
