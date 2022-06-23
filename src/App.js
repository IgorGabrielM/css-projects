import './App.css';
import { Routes, Route, Outlet } from 'react-router';
import SodaPage from './pages/soda/SodaPage';
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <main className='app-container'>
        <Routes>
          <Route path='*' element={<Home />}/>
          <Route path='/soda' element={< SodaPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
