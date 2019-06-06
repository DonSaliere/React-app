import React from 'react';
import '../Table.css';
import PriceTableHeader from './Price-Table-Header';

export default (props) => (
    <div>
        <table className = "table">
            <thead>
                <PriceTableHeader
                {...props}
                />  
            </thead>
            <tbody>
                {props.prices.map(item => (
                    <tr key={item.id}>              
                        <td className = "align-center">{item.id}</td>
                        <td className = "align-center">{item.article}</td>
                        <td className = "align-center">{item.name}</td>
                        <td className = "align-center">{item.price}</td>
                        <td><button type="button" 
                            className="btn btn-outline-danger btn-sm float-right"                       
                            onClick ={() => props.onDeleted(item.id) }> 
                            <i className="fa fa-trash-o" />
                            </button>
                        </td>
                    </tr>
                ))}  
            </tbody>  
        </table>  
    </div>    
)