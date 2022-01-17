import react, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Route, Routes, NavLink,Switch} from 'react-router-dom';
export class NavigationBar extends Component
{
    render()
    {
        return(
            <div className="NavigationToogle">
              <Navbar bg="white" expand="lg" >
                <Container>
                      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src={window.location.origin + '/yellow-icon.png'} width="30" height="24" />
                            <NavLink className="nav-link" to="/valuation">
                                <span className="fs-6 me-2 text-dark"><b>Valuations</b></span>
                            </NavLink> 
                      </a>
                      <div className="col-md-3 text-end">
                        <span className="fs-6 me-2"><b>Laurel Green</b></span>
                        <button type="button" className="btn btn-outline-primary me-2" to="/valuation">Logout</button>
                      </div>              
                </Container>          
              </Navbar>
          </div>
        )
    }
}
