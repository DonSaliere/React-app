import React from 'react';

const PriceTableHeader = ({onSort}) => {

return (   
    <tr>
        <th className = "align-center" >
            ID <button onClick={onSort.bind(null,'id')} type="button" className="btn btn-outline-info btn-sm  "> <i className="fa fa-sort" /> </button>
        </th>  
        <th className = "align-center">
            Производитель <button onClick={onSort.bind(null,'article')} type="button" className="btn btn-outline-info btn-sm "> <i className="fa fa-sort" /> </button>
        </th>  
        <th className = "align-center">
            Наименование  <button  onClick={onSort.bind(null,'name')} type="button" className="btn btn-outline-info btn-sm "> <i className="fa fa-sort" /> </button>
         </th>  
        <th className = "align-center" >
             Цена <button onClick={onSort.bind(null,'price')} type="button" className="btn btn-outline-info btn-sm "> <i className="fa fa-sort" /> </button>
        </th> 
        <th></th>      
    </tr>   
    );
};

export default PriceTableHeader;