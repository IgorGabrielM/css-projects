import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Soda from './pages/soda/Soda';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/soda' element={<Soda />} />
      </Routes>
    </Router>
  );
}

export default App;
