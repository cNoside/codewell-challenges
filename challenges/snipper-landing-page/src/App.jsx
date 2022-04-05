import './App.scss';
import 'normalize.css';
import Navbar from './components/Navbar';
import pages from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <pages.Landing />
      <Footer />
    </div>
  );
}

export default App;
