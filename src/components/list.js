import React, { Component } from 'react';

class list extends Component {

    state = {
        title: "My Todos",
        todos: []
    }

    handleButtonClick = ()=>{
        this.setState({ todos: [...this.state.todos, "a todo"]})
    }

    handleTodoClick = (event) =>{
        console.log(event.target.id)
    }

    handleOnChange = (event) =>{
        console.log(event.target.id)
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
            <div>
                <div class="outer">
                    <div class="inner">{this.state.title}</div>
                    <button class="inner" onClick={this.handleButtonClick}> add a todo </button>
                </div>
                <ul>
                    {this.state.todos ? this.state.todos.map((todo,index) => <li onClick={this.handleTodoClick}><input id={index} onChange={this.handleOnChange} value={todo} /></li>) 
                    : null }
                </ul>
            </div>
        );
    }
}

export default list;