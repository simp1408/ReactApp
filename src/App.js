
import './App.css';
import AllBooks from './components/AllBooks';
import BookSearch from './components/BookSearch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
   <Navbar />
   <Welcome/>
   <AllBooks/>
   <BookSearch/>
   <Footer/>
    </div>
  );
}

export default App;
