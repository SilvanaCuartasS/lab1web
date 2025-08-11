import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Rewards from './components/Rewards/Rewards';
import Promotion from './components/Promotion/Promotion';
import Footer from './components/Footer/Footer';
import { cardsData } from './data/cardsData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Rewards />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;