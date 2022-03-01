import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Home from "./components/Home";
import Fiches from "./components/fiches/Fiches";
import Fiche from "./components/fiches/Fiche";
import Devis from "./components/devis/Devis";
import Devi from "./components/devis/Devi";
import Factures from "./components/factures/Factures";
import Facture from "./components/factures/Facture";
import Clients from "./components/clients/Clients";
import Client from "./components/clients/Clients";


function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="home/" element={<Home />} exact />

        <Route path="/fiches" element={<Fiches />} exact />
        <Route path="/fiches/:id" element={<Fiche />} />

        <Route path="/devis" element={<Devis />} exact />
        <Route path="/devis/:id" element={<Devi />} />

        <Route path="/factures" element={<Factures />} exact />
        <Route path="/factures/:id" element={<Facture />} />

        <Route path="/clients" element={<Clients />} exact />
        <Route path="/clients/:id" element={<Client />} />
      
      </Routes>
      <Footer />
      <Background />
    </Router>
  );
}

export default App;
