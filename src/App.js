import {FirebaseConfig} from "./config/Config"
import {initializeApp} from "firebase/app"
import { Routes, Route } from "react-router-dom"

import {Header } from "./components/Header"
import './App.css';
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"

function App() {
  const FBapp = initializeApp(FirebaseConfig)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home greeting="Hey, You're on the Home page!" /> } />
        <Route path="/about" element={ <About greeting="Hey you, this is the About page!" /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
