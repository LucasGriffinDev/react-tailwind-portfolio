import About from './components/About';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import Portfolio from './components/Portfolio';
import { SocialLinks } from './components/SocialLinks';
import { Technologies } from './components/Technologies';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
      <Testimonials />

      <SocialLinks />
    </div>
  );
}

export default App;
