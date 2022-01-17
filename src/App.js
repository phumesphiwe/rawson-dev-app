import './App.css';
import {Valuation} from './Valuation';
import {BrowserRouter, Route, Routes, NavLink,Switch} from 'react-router-dom';

import {NavigationBar} from './Components/NavigationBar'
import {useState,useEffect} from 'react';
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  return (
    <BrowserRouter>
         <div className="App"> { <NavigationBar/> } </div>
          <Switch>
            <Route path='/valuation' component={Valuation}/>

        </Switch>
 
    </BrowserRouter>  
  );
}

export default App;
