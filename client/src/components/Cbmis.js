import '../App.css';
import Home from './shared/home/HomePage';
import Login from './shared/login/Login';
import NavBar from './shared/navBar/NavBar';
import RegisterWay from './shared/register/sections/chooseWay/RegisterWay';
import RegisterPage from './shared/register/sections/registerPage/RegisterPage';
import Profile from './shared/profile/Profile';
import GymDashboard from './shared/gymDashboard/GymDashboard';
import SportList from './shared/gymList/GymList';
import GymPage from './shared/gymPage/GymPage';
import { Routes, Route } from 'react-router-dom';
import ScrollTop from './shared/Utilities/scrollTop/ScrollTop';
import Footer from './shared/footer/Footer';
import VerifyAccount from './shared/verifyAccount/VerifyAccount';

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerWay" element={<RegisterWay />} />
          <Route path="/registerWay/:type" element={<RegisterPage />} />
          <Route path="/dashboard/gym" element={<GymDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sportGymList/:sportId" element={<SportList />} />
          <Route path="/gymPage/:userId" element={<GymPage />} />
          <Route path="/verifyAccount" element={<VerifyAccount />} />
          <Route path="*" element={<p className="notFoundPage"> Page Not Found error 404 </p>} />
        </Routes>
        <ScrollTop />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
