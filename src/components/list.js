import React, { Component, Fragment } from 'react';
import '../styles/list.css'

class list extends Component {

    state = {
        title: "My Todos",
        todos: [],
        id: this.props.id
    }

    handleButtonClick = ()=>{
        this.setState({ todos: [...this.state.todos, "a todo"]})
    }

    handleOnChange = (event) =>{
        let changed = this.state.todos.map( (todo,index) => {
            if(index === ~~event.target.id){
                return todo = event.target.value
            }else{
                return todo
            }
        })
        this.setState({ todos: changed})
    }

    handleTitleClick = (event) =>{
        this.setState({title: event.target.value})
    }

    render() {
        return (
            <Fragment class="list">
                <div class="outer">
                    <div class="inner"><input class="input" onChange={this.handleTitleClick} width={`${this.state.title.length}`} value={this.state.title}/></div>
                    <button class="inner" onClick={this.handleButtonClick}> todo++ </button>
                </div>
                <ul class="outer">
                    {this.state.todos ? this.state.todos.map((todo,index) => <li><input class="input" id={index} onChange={this.handleOnChange} value={todo} /></li>) 
                    : null }
                </ul>
            </Fragment>
        );
    }
}

export default list;