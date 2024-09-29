
import Home from './components/home.jsx';
import Section1 from './components/Section1.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';
import Navbar from '../Navbar.jsx';

function App() {
  return (
    <>
      <div>
      <Navbar/>
        <Home/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        
      </div>
    </>
  );
}

export default App;
