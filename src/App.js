import {FirebaseConfig} from "./config/Config"
import {initializeApp} from "firebase/app"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './App.css';

function App() {
  const FBapp = initializeApp(FirebaseConfig)
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>React app</h1>
    </div>
  );
}

export default App;
