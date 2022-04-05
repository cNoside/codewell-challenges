import './App.scss';
import 'normalize.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Landing } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
