import React, { Component } from 'react';
import '../styles/list.css'

class list extends Component {

    state = {
        title: "My Todos",
        todos: []
    }

    handleButtonClick = ()=>{
        this.setState({ todos: [...this.state.todos, "a todo"]})
    }

    handleOnChange = (event) =>{
        let changed = this.state.todos.map( (todo,index) => {
            if(index == event.target.id){
                return todo = event.target.value
            }else{
                return todo
            }
        })
        this.setState({ todos: changed})
    }

    render() {
        return (
            <div class="list">
                <div class="outer">
                    <div class="inner">{this.state.title}</div>
                    <button class="inner" onClick={this.handleButtonClick}> todo++ </button>
                </div>
                <ul class="outer">
                    {this.state.todos ? this.state.todos.map((todo,index) => <li><input class="input" id={index} onChange={this.handleOnChange} value={todo} /></li>) 
                    : null }
                </ul>
            </div>
        );
    }
}

export default list;