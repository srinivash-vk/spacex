import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LaunchesPage from './Container/LaunchesPage/LaunchesPage';
import HistoryPage from './Container/HistoryPage/HistoryPage';
import RocketsPage from './Container/RocketsPage/RocketsPage';
import RocketDetailsPage from './Container/RocketDetailsPage/RocketDetailsPage';
import LandingPage from './Container/LandingPage';
import ScrollToTop from './Components/ScrollToTop';
import LaunchDetailsPage from './Container/launchDetailsPage/LaunchDetailsPage';

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route element={<NavBar />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/launches' element={<LaunchesPage />} />
        <Route path='/launches/:id' element={<LaunchDetailsPage />} />
        <Route path='/rockets' element={<RocketsPage />} />
        <Route path='/rocket/:id' element={<RocketDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
