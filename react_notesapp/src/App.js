import './App.css';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Bin from './pages/Bin';
import Important from './pages/Important';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/important' element={<Important />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/bin' element={<Bin />} />
    </Routes>
  );
}

export default App;
