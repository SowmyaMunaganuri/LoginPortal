import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './Login'; //C1

function App() {
  return (
      <Router>
      <Fragment>
        <Route exact path="/" component={Login}/>
      </Fragment>
      </Router>
     
  );
}

export default App;
