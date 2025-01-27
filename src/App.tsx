import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './components/BlogDetail';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>


    <div className="min-h-screen bg-cream">
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;