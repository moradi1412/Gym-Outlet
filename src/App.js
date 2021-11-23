import React from 'react';
import Header from './components/Header';
import Home from './components/pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact = {Home} />
      </Switch>
      {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;