import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/home/Services'
import AboutMe from './components/About';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<AboutMe />} />
    </Routes>
  );
};

export default App;
