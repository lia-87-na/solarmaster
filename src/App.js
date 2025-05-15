
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowUp } from "react-icons/io";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <a href='#home' className='arrowup'>
        <IoIosArrowUp />

      </a>
    </div>
  );
}

export default App;
