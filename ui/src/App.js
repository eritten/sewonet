import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import {Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Nav />
    {/* routes */}
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    {/* end of routes */}
    <Footer />
    </>
  )
}

export default App;
