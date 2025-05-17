import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/home/Services'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
};

export default App;
