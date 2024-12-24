import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CorporateEvent from "./pages/Corporate";
import SocialEvent from "./pages/Social";
import FestiveEvent from "./pages/Festive";
import CommunityEvent from "./pages/Community";
import WeddingEvent from "./pages/Wedding";
import PartyEvent from "./pages/Party";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/menu" element={<Menu></Menu>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/corporate-event" element={<CorporateEvent></CorporateEvent>} />
          <Route path="/social-event" element={<SocialEvent></SocialEvent>} />
          <Route path="/festive-event" element={<FestiveEvent></FestiveEvent>} />
          <Route path="/community-event" element={<CommunityEvent></CommunityEvent>} />
          <Route path="/wedding-event" element={<WeddingEvent></WeddingEvent>} />
          <Route path="/party-event" element={<PartyEvent></PartyEvent>} />

        </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;