import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Weather from "./components/weatherapi";
import Login from "./pages/login"; // Import the Login component
import Crud from "./pages/crud";
import Home from "./components/home";
import Servicenav from "./components/servicenav";
import Serviceareas from "./components/serviceareas";
import Pricelist from "./components/pricelist";
import Aboutus from "./components/about";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />  {/* Default Route */}

          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicenav" element={<Servicenav />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/serviceareas" element={<Serviceareas />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
