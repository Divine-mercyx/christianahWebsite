import './App.css'
import {Navbar} from './components/navbar.jsx'
import {HeroSection} from "./components/heroSection.jsx";
import {SecureBanking} from "./components/secureBanking.jsx";
import {Innovate} from "./components/innovate.jsx";
import {Empower} from "./components/empower.jsx";
import {Join} from "./components/join.jsx";
import {Rating} from "./components/rating.jsx";
import {Empower2} from "./components/empower2.jsx";
export function App() {

  return (
      <>
          <Navbar/>
          <HeroSection/>
          <SecureBanking/>
          <Innovate/>
          <Empower/>
          <Join/>
          <Rating/>
          <Empower2/>
      </>
  )
}