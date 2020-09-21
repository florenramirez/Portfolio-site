import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import Footer from '../src/components/Footer.js';
import HomePage from '../src/pages/HomePage.js';
import AboutPage from '../src/pages/AboutPage.js';
import ContactPage from '../src/pages/ContactPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Florencia Ramirez',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Photographer',
        subtitle: 'Less is more',
        text: 'Check out some of my works below',
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s talk'
      },
    }
  }

  render () {
      return (
        <Router>
          <Container className='p-0' fluid={true}>
            <NavBar className='border-bottom' bg='transparent' expand='lg'>
              <NavBar.Brand>Florencia Ramirez</NavBar.Brand>
              
              <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
              <NavBar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/about'>About</Link>
                  <Link className='nav-link' to='/contact'>Contact</Link>
                
                                  </Nav>
              </NavBar.Collapse>
            </NavBar>


            <Route path='/' exact render={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
            <Route path='/about' render={()=><AboutPage title={this.state.about.title} />}/>
            <Route path='/contact' render={()=><ContactPage title={this.state.contact.title}/>}/>

            <Footer/>

          </Container>
        </Router>
      );
  }
  
}

export default App;
