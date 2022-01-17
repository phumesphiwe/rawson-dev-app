import './App.css';
import React,{Component} from 'react';

import { Buttons } from './Components/Buttons';
import { Stats } from './Components/Stats';
import TableResults  from './Components/TableResults';

export class Valuation extends Component{
   
    render(){
       
        return(
        <div>
            <div class="container">  <br/> <br/><Buttons/></div>
            <div class="container">  <br/> <br/><Stats/></div>
            <div class="container">  <br/> <br/><TableResults/></div>
        </div>
        )
    }
}