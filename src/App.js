import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import About from './About/About.js';
import Experience from './Experience/Experience.js';
import Projects from './Projects/Projects.js';
import Skills from './Skills/Skills.js';
import Fun from './Fun/Fun.js';
import Contact from './Contact/Contact.js';
import Leftbar from './Sidebars/Leftbar.js';
import Rightbar from './Sidebars/Rightbar.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="Top">
          <Home/>
        </div>
        <div className="Bottom">
          <div className="Sidebar">
            <Leftbar/>
          </div>
          <div className="Main">
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Fun/>
            <Contact/>
          </div>
          <div className="Sidebar">
            <Rightbar/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
