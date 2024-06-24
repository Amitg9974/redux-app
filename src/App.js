import "./App.css";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import Cards from "./Components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
