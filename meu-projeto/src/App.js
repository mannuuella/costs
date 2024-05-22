import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
      <Route exact path="/" element={<Home />} > </Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
