import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { setItemvalue, resetItemvalue } from '../action';
import { SET_ITEMS, RESET_ITEMS } from '../constant.js';


 
const mapStateToProps = (state) => {
  // console.log(state)                 
  return {
    item: state.updateItemsState.item,
    items: state.itemsState.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => { 
      dispatch(setItemvalue(e.target.value.replace(/\s/y, ''))) 
    },
    resetItem: () => dispatch( resetItemvalue()),
    handleSub: (updatedItems) => dispatch({
      type: SET_ITEMS,
      payload: updatedItems
    }),  
    resetItems: () => dispatch({
      type: RESET_ITEMS,
      payload: []
    }),
    updateItemInput: (value) => { 
      dispatch(setItemvalue(value)) 
    }
  }   
}

class App extends Component {

  state = {
    // items: [],
    id: uuid(),
    editItem: false,
  };


  handleSubmit = e => {
    
    e.preventDefault()
    this.props.resetItem()
    let newItem = {
      id: this.state.id,
      title: this.props.item
    };
    let updatedItems = [...this.props.items, newItem];
    this.props.handleSub(updatedItems)
    // this.props.items({
    //   id: this.state.id,
    //   text: this.props.item
    // });


    this.setState({
      // items: updatedItems,
      // item: "",
      id: uuid(),
      editItem: false
    });
  }; 
  
  clearList = () => {
    this.props.resetItems()
  };
  
  handleDelete = id => {
    const filteredItems = this.props.items.filter(item => item.id !== id);
    this.props.handleSub(filteredItems)

  };
  handleEdit = id => {
    const filteredItems = this.props.items.filter(item => item.id !== id);
    const selectedItem = this.props.items.find(item => item.id === id);
    console.log(selectedItem.title);
    this.props.handleSub(filteredItems);
    let value = selectedItem.title;
    this.props.updateItemInput(value)
    this.setState({ 
      editItem: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center" onClick={(e) => this.handleSub(e)}>todo input</h3>
            {/* <h4>{this.props.items}f</h4> */}

            <TodoInput
              item={this.props.item}
              handleChange={this.props.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList
              id={this.state.id}
              items={this.props.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
