import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetail/ServiceDetailPage';
import AboutPage from './pages/About/AboutPage';
import FAQPage from './pages/FAQ/FAQPage';
import AdminPage from './pages/Admin/AdminPage';
import TeamPage from './pages/Team/TeamPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;