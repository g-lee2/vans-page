import './App.css';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Reviews from './components/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './components/HostVans';
import HostVansDetails from './components/HostVansDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />}/>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVansDetails />}/>
          </Route>
        </Route>/income
      </Routes>
    </BrowserRouter>
  );
}

export default App;
