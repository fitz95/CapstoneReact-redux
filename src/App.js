import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coindetails" element={<CoinDetails />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
