import React from 'react';

const PriceListItem = ({onSort,sortField}) => {

return (   
        //<td>
        //    <button type="button" 
        //    className="btn btn-outline-danger btn-sm float-right"
        //    onClick ={onDeleted}> 
        //    <i className="fa fa-trash-o" />
        //    </button>
        //</td>
        <tr>
               <th> onClick={onSort.bind(null,'id')} >
                   ID {sortField === 'id' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm  "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
               </th>  
               <th onClick={onSort.bind(null,'article')}>
                   Производитель {sortField === 'article' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
              </th>  
               <th onClick={onSort.bind(null,'name')}>
                   Наименование {sortField === 'name' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
                </th>  
               <th onClick={onSort.bind(null,'price')}>
                    Цена {sortField === 'price' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
               </th> 
               <th></th>      
           </tr>   
        
        //   <tr>
        //      <th onClick={props.onSort.bind(null,'id')} >
        //          ID {props.sortField === 'id' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm  "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
        //      </th>  
        //      <th onClick={props.onSort.bind(null,'article')}>
        //          Производитель {props.sortField === 'article' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
        //     </th>  
        //      <th onClick={props.onSort.bind(null,'name')}>
        //          Наименование {props.sortField === 'name' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
        //       </th>  
        //      <th onClick={props.onSort.bind(null,'price')}>
        //           Цена {props.sortField === 'price' ? <small>{ <button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button>}</small> : <small><button type="button" className="btn btn-outline-danger btn-sm "> <i className="fa fa-sort" /> </button></small> }
        //      </th> 
        //      <th></th>      
        //  </tr>   
     
    );
};

export default PriceListItem;