import React, {Fragment} from 'react';
import './App.css';
import About,{ DetailAbout} from './components/About';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Services, {DetailServices} from './components/Services'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Helmet> <title> Law Firm | Home </title>
      </Helmet>
      <Fragment>
    <Navbar />
      <Route exact path ="/" render={()=>(
      <div className = "App">
      <MainHeader/>
      <About/>
      <Services/>
      <Reviews/>
    </div>
     )} />
    <Switch>
     <Route exact path="/services" component={DetailServices} />
     <Route exact path="/aboutus" component={DetailAbout} />
     <Route exact path="/contactus" component={Contact} />
    </Switch>
    </Fragment>
    <Footer/>
    </Router>
  );
}

export default App;
