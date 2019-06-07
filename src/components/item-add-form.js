import React, { Component } from 'react';
import '../Table.css';

export default class ItemAddForm extends Component {

    state = {
        article:'',
        name:'',
        price:''
    };

    onSabmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state)
        this.setState({
            article:'',
            name:'',
            price:''
        });
    };

    Change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        return(
            <form className = "item-add-form d-flex"
                  onSubmit = {this.onSabmit}>
                <input
                    type ="text"
                    className = "form-control"
                    name="article"
                    value={this.state.article}
                    onChange = {this.Change}
                    placeholder = "Производитель"/>
                <input
                    type ="text"
                    className = "form-control"
                    name="name"
                    value={this.state.name}
                    onChange = {this.Change}
                    placeholder = "Наименование"/>
                 <input
                    type ="text"
                    className = "form-control"
                    name="price"
                    value={this.state.price}
                    onChange = {this.Change}
                    placeholder = "Цена"/>
                <button type="submit"
                    className = "btn btn-primary btn-sm">
                    Add Item
                </button>
            </form>
        )
    }
}