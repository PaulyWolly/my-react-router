/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Component } from 'react'
import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
        </div>

      </Router>
    );
  }
}

export default App;
