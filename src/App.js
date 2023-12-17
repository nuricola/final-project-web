import './App.css';
import { Link,Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Tictac from './pages/TicTac';
import Todo from './pages/Todo';




function App() {
  return (
    <div >
     <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='navbar-brand text-success fw-semibold'>
            Nur Restaurant
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto  justify-content-end  w-100'>
            <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
            <Nav.Link href='/menu' className=' text-uppercase'>Menu</Nav.Link>
            <Nav.Link href='/about' className=' text-uppercase'>About</Nav.Link>
            <Nav.Link href='/contact' className=' text-uppercase'>Contact</Nav.Link>
            <Nav.Link href='/todo' className=' text-uppercase'>Order</Nav.Link>
            <Nav.Link href='/tictac' className=' text-uppercase'>Have Fun</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/tictac' element={< Tictac/>} />
      <Route path='/todo' element={< Todo/>} />
      
     </Routes>

     <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>It2-2107 Nurbek Nurlanuly</p>
      </footer>
    </div>
  );
}

export default App;
