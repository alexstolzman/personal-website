
import Home from './Home';
import Header from './Header';
import About from './About';
import Project from './Project'
import Projects from './Projects';
import Contact from './Contact'
import Interests from './Interests'

import { Route, Routes } from 'react-router-dom'

import '../style/App.css';
import Confirmation from './Confirmation';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="about" element={ <About /> } />
        <Route path="projects" element={ <Projects /> } >
          <Route path=":project" element={ <Project /> }/>
        </Route>
        <Route path="contact" element={ <Contact /> } />
        <Route path="interests" element={ <Interests /> } />
        <Route path="confirmed" element={ <Confirmation /> }/>
      </Routes>
    </div>
  );
}

export default App;
