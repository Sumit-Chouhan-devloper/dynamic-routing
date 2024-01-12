import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Home";
// import ContactPage from "./view/ContactPage";
import AboutPage from "./view/AboutPage";
import BrandPage from "./view/BrandPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/ContactPage" element={<ContactPage />} /> */}
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/AboutPage/:id" element={<BrandPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
