import logo from './logo.svg';
import './App.css';
import NavbarSection from './commonComponent/navbarSection/NavbarSection';
import Headersection from './pages/headerSection/HeaderSection'
import FirstSection from './pages/firstSection/FirstSection'
import SecondSection from './pages/secondSection/SecondSection'
import ThirdSection from './pages/thirdSection/ThirdSection'
import FourthSection from './pages/fourthSection/FourthSection'
import FooterSection from './commonComponent/footerSection/FooterSection'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
function App() {
  return (
    <div>
    <NavbarSection/>
    <Headersection/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FooterSection/>
    
    </div>
  );
}

export default App;
