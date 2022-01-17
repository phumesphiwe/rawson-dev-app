import react, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
export class Stats extends Component
{
    render()
    {
        return(
            <div class="panel panel-default">
            <div class="panel-body">
                <Card size="sm">
                    <Card.Body>  
               <Table borderless="false" id="cssTable">             
                            <tr>
                                <td>
                                   <br/> <br/>
                                  <h1>21</h1>
                                </td>
                                <td> 
                                    <br/> <br/>
                                     Total valuations
                                </td>
                                <td colSpan={8}><div>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                            </svg>
                                            In progress (6) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="orange" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                            </svg>
                                            Completed (8) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="lightgrey" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                            </svg>
                                            Draft (7)
                                         </p> 
                                        <ProgressBar>
                                            <ProgressBar striped variant="info" now={25} key={1} />
                                            <ProgressBar variant="warning" now={40} key={2} /> 
                                        </ProgressBar>                                                     
                                     </div></td>
                                </tr>
                        </Table>                                                                       
                    </Card.Body>
                </Card>
            </div>
        </div>
        )
    }
}
