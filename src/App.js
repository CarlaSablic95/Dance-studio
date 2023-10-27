import './styles/styles.scss';
// import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Register />*/}
        <Home />
        <Footer />

    </div>
  );
}

export default App;
