import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";

import "./components/SCSS/App.scss"
import About from "./views/AboutMe";
import Career from "./views/Career";

//By Lucia and Arturo
/* 
  Dependencies:
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.0",
    "react-dom": "^18.2.0",
    "react-router-bootstrap": "^0.26.2",
    "react-router-dom": "^6.17.0",
    "react-scripts": "5.0.1",
    "sass": "^1.69.3"
*/


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/career" element={<Career/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
