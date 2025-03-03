import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import ContentDescription from "./components/Home/ContentDescription";
import Admin from "./pages/Protected/Admin";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<ContentDescription />} />

        {/* Contact page */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
