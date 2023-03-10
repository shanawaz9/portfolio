import './App.css';
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';
import About from './components/About/About'
import Art from './components/Art/Art'
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route index element={<Body />} />
          <Route path="About" element={<About/>} />
          <Route path="Art" element={<Art />} />
        </Routes>
      </div>
      <Nav />

    </HashRouter>
  );
}

export default App;
