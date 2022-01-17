import react, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RawsonData from '../data/data.json';
import Image from 'react-bootstrap/Image'
export default function TableResults()  
{
        const [data,setData] = useState(RawsonData)
        const [searchTerm,setSearchTerm] = useState('')
        const [order,sortOrder] = useState("ASC")
        const sorting= (col)=>{
            if(order === "ASC"){
                const sorted = [...data].sort((a,b) =>
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1 
                );
                setData(sorted);
                sortOrder("DSC");
            }
            if(order === "DSC"){
                const sorted = [...data].sort((a,b) =>
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1 
                );
                setData(sorted);
                sortOrder("ASC");
            }
        }

        return(
            <div class="panel panel-default">
            <div class="panel-body">
                <Card>
                    <Card.Body> 
                        <div class="main-search float-left">
                        <div class="form-group has-search"><span class="fa fa-search form-control-feedback"></span><input type="text" class="form-control" placeholder="Search valuations by address or sellers name"  onChange={""}/></div>
                        </div>
                   
                    <table className="table table-sm" >
                                <thead>
                                    <tr style={{background: "#f7f7f7" }}>
                                        <th onClick={()=>sorting("StreetAddress")}>StreetAddress<img src={window.location.origin + '/up-down.png'} width="12" height="12" /></th>
                                        <th onClick={()=>sorting("Seller")}>Seller<img src={window.location.origin + '/up-down.png'} width="12" height="12" /></th>
                                        <th onClick={()=>sorting("Progress")}>Progress<img src={window.location.origin + '/up-down.png'} width="12" height="12" /></th>
                                        <th onClick={()=>sorting("Created")}>Created<img src={window.location.origin + '/up-down.png'} width="12" height="12" /></th>
                                        <th onClick={()=>sorting("Completed")}>Completed<img src={window.location.origin + '/up-down.png'} width="12" height="12" /></th>
                                        <th>Report</th>
                                        
                                    </tr>

                                </thead>
                                <tbody>
                                        {data.map((d)=>(
                                           <tr id={d.id}>
                                               <td> 
                                                   <table className="table table-borderless sm">
                                                       <tr>
                                                           <td><img src={window.location.origin + '/yellow-icon.png'} width="40" height="40" /></td>
                                                           <td><b><a>{d.StreetAddress}</a></b><br/>&nbsp;&nbsp;{d.updated}</td>
                                                       </tr>
                                                   </table>                                                 
                                               </td>
                                               <td><br/>{d.Seller}</td>
                                               <td>
                                                    <br/>{d.Progress === 100? <ProgressBar variant="warning" now={d.Progress} label={`${d.Progress}%`}  />: <ProgressBar variant="info" now={d.Progress} label={`${d.Progress}%`} /> }
                                                </td>
                                                <td><br/>{d.Created}</td>
                                                <td><br/>{d.Completed}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td><br/>
                                                 {d.Report === 1? <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked></input>: <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"></input> }
                                                </td>
                                                <td>
                                                     <br/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                     </svg>
                                               </td>
                                           </tr> 
                                        ))
                                        }
                                </tbody>
                        </table>
                    </Card.Body>
                </Card> 
                
            </div>
        </div> 
        )
       
}
