import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import './style/style-null.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import PortfolioPages from './components/projects/PortfolioPages';
import AllProjects from './components/projects/AllPortfolio';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';

function App() {
  console.log('Work');
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/portfolio/:id' element={<PortfolioPages/>}/>
        <Route path='/all-portfolio' element={<AllProjects/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contsct' element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
