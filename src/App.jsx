import './App.css'
import {Navbar} from './components/navbar.jsx'
import {HeroSection} from "./components/heroSection.jsx";
import {SecureBanking} from "./components/secureBanking.jsx";
import {Innovate} from "./components/innovate.jsx";
export function App() {

  return (
      <>
          <Navbar/>
          <HeroSection/>
          <SecureBanking/>
          <Innovate/>
      </>
  )
}