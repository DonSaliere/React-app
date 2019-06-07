import React, { Component } from 'react';
import PriceList from './components/Table';
import _ from 'lodash';
import './Table.css';
import ItemAddForm from './components/item-add-form';
import SearchPanel from './components/search-panel';

export default class App extends Component {

maxId = 15;

  state = {
    priceData: [
      {id: 1, article: 'Samsung', name: 'SSD 120GB', price: 2500},
      {id: 2, article: 'Samsung', name: 'SSD 250GB', price: 4300},
      {id: 3, article: 'Samsung', name: 'SSD 500GB', price: 7000},
      {id: 4, article: 'Kingston', name: 'SSD 240GB', price: 2250},
      {id: 5, article: 'Kingston', name: 'SSD 480GB', price: 4350},
      {id: 6, article: 'Kingston', name: 'SSD 960GB', price: 12000},
      {id: 7, article: 'Kingston', name: 'SSD 120GB', price: 1550},
      {id: 8, article: 'Corsair', name: 'SSD 240GB', price: 4300},
      {id: 9, article: 'Samsung', name: 'SSD 250GB', price: 3950},
      {id: 10, article: 'Corsair', name: 'SSD 240GB', price: 4300},
      {id: 11, article: 'Apacer', name: 'SSD 120GB', price: 1250},
      {id: 12, article: 'Apacer', name: 'SSD 128GB', price: 1650},
      {id: 13, article: 'Apacer', name: 'SSD 240GB', price: 2500},
      {id: 14, article: 'Apacer', name: 'SSD 480GB', price: 6000}
    ],
    sort:'asc',
    sortField: 'id',
    search: ''
  }; 

onDelete = (id) => {
  this.setState((state) => {
    const idx = state.priceData.findIndex((item) => item.id === id);
    const priceData = [
      ...state.priceData.slice(0, idx),
      ...state.priceData.slice(idx + 1)
    ];
    return { priceData };
  });
};

addItem = (text) => {
  const newItem = {
    id: this.maxId++,
    article: text.article,
    name: text.name,
    price: text.price,
  };
  this.setState(({priceData}) => {
    const newArr = [...priceData,newItem];
    return {
      priceData: newArr
    };
  });
};

onSort = (sortField) => {
  const clonedData = this.state.priceData.concat()
  const sortType = this.state.sort === 'asc' ? 'desc': 'asc'
  const orderedData = _.orderBy(clonedData,sortField,sortType)
  this.setState({
    priceData: orderedData,
    sort: sortType,
    sortField
  })
};

searchItems(priceData, search) {
  if (search.length === 0) {
    return priceData;
  }

  return priceData.filter((item) => {
    return item.article.toLowerCase().indexOf(search.toLowerCase()) > -1
        || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  });
}

onSearchChange = (search) => {
  this.setState({ search });
};

  render(){
    const { priceData, search } = this.state;
    const visibleItems = this.searchItems(priceData, search);
    return (
      <div className="container">
            <div className="search-panel d-flex">
              <SearchPanel
               onSearchChange={this.onSearchChange}/>
            </div>
          <ItemAddForm
            onItemAdded = {this.addItem}
          />
          <PriceList 
            prices={ visibleItems }
            onSort = {this.onSort}
            sort = {this.state.sort}
            onDeleted ={(this.onDelete)}
          />
      </div>
    );
  }
}
