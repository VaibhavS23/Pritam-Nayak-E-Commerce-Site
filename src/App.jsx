import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

import NewIn from './Components/NewIn';
import About from './Components/About/about.jsx';
import Accessories from './Components/Accessories/accessories.jsx';
import Collection from './Components/Collection/collection.jsx';
import Runway from './Components/Runway/runway.jsx';
import Main from './Main';

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-in" element={<NewIn/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/runway" element={<Runway/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
