import './App.css';
import Home from './components/Home';
import About from './components/About';
import Vans, { loader as vansLoader } from './components/Vans';
import VanDetail, { loader as vanDetailLoader } from './components/VanDetail';
import Layout from './components/Layout';
import Dashboard, { loader as dashboardLoader } from './components/Dashboard';
import Income from './components/Income';
import Reviews from './components/Reviews';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVansLoader } from './components/HostVans';
import HostVansDetails, { loader as hostVanDetailLoader } from './components/HostVansDetails';
import HostVansPhotos from './components/HostVansPhotos';
import HostVansPricing from './components/HostVansPricing';
import HostVansInfo from './components/HostVansInfo';
import NotFound from './components/NotFound';
import Error from './components/Error';
import Login, { action as loginAction } from './components/Login';
import AuthRequired from './components/AuthRequired';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} action={loginAction} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />}/>
    
    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} errorElement={<Error />}
          loader={dashboardLoader} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
        <Route path="vans/:id" element={<HostVansDetails />} loader={hostVanDetailLoader} errorElement={<Error />} >
          <Route index element={<HostVansInfo />} />
          <Route path="pricing" element={<HostVansPricing />} />
          <Route path="photos" element={<HostVansPhotos />} />
        </Route>
      </Route>
    </Route>

    <Route path="*" element={<NotFound />}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
