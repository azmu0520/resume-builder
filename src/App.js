import './App.css';
import Navbar from './components/Navabr';
import background from '../../assets/background.jpeg';
import Section from './components/Section';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Section img={background} />
    </div>
  );
}

export default App;
