import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-lato min-h-screen">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <CTA />
      <Footer />
    </div>
  );
}
