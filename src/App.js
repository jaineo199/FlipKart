import React from 'react';
import Main from './Main';
import './App.css';
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';

import Main2 from './Main2';
import Main3 from './Main3';


function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>   
        
        
        <Route exact path="/" component={Main}/>
      
        <Route exact path="/main2" component={Main2}/>

        <Route exact path="/main3" component={Main3}/>
        </Switch>
        
        
        </Router>
  
    </div>
  );
}

export default App;
