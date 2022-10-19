import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutus from './components/pages/About-us';
import SignUp from './components/pages/Sign-up';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Gettecnico from './components/getTecnico/readTec';
import Postuser from './components/pages/cadastraUser/postUser';
import Postec from './components/pages/cadastrarTec/Postec';
import Getuser from './components/getUser/getuser';
function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
 
          <Route path='/' exact component={Home} /> 
          <Route path='/Services' component={Services} />
          <Route path='/About-us' component={Aboutus} />
          <Route path='/Sign-up' component={SignUp} /> 
         <Route path='/user' component={Postuser}/>   
         <Route path='/tecnlist' component={Gettecnico}/> 
         <Route path='/Tec' component={Postec}/> 
         <Route path='/userlist' component={Getuser}/>      
          </Switch>
      </Router>
     
    </>
  );
}

export default App;
