import Nav from "./components/Nav";

import Home from "./components/Home";

import Category from "./components/Category";

import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Single from "./components/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Category/:category" element={<Category />} />
          <Route path="/Single/:category/:id" element={<Single />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
