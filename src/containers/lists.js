import React, { Component } from 'react';
import List from '../components/list'
import '../styles/list.css'

class lists extends Component {
    state ={
        lists:[],
        draggedItem: {},
        counter: 0
    }

    handleButtonClick = (event) =>{
        let prop = {title: 'title', todos:[], id: 100}
        this.setState({lists: [...this.state.lists, {list: <List props={prop} /> , id: this.state.counter} ] , counter: this.state.counter+1 })
    }

    handleDrag = (event)=>{
        let temp = event.target.getElementsByClassName("input")
        let values = Array.from(temp).map(x => x.value)
        let title = values.slice(0,1)
        let todos = values.slice(1, values.length)
        this.setState({draggedItem: {title: title, todos:todos, id: event.target.id}})
    }

    handleDrop = (event) =>{
        event.preventDefault()
        console.log(event.target, "this is drop")
        // let filtered = this.state.lists.filter(list => list.id !== ~~event.target.id)
        // this.setState({lists: filtered})
        if(event.target.id && event.target.className === "list"){
            if(event.target.id < this.state.draggedItem.id){
                console.log("item is moving left")
                let lists=this.state.lists
                let temp = [...lists].slice(0,event.target.id)
                temp.push({list: <List props={this.state.draggedItem}/> , id: this.state.counter})
                temp = temp.concat(lists.slice(event.target.id, lists.length-1))
                this.setState({lists: temp, counter: this.state.counter+1}, console.log(this.state.lists, "lists after drag"))    
            }else{
                console.log("item is moving right")
                let lists=this.state.lists
                let temp = [...lists].slice(0,event.target.id)
                temp.push({list: <List props={this.state.draggedItem}/> , id: this.state.counter})
                temp = temp.concat(lists.slice(event.target.id, lists.length-1))
                this.setState({lists: temp, counter: this.state.counter+1}, console.log(this.state.lists, "lists after drag"))    
            }
        }
    }

    handleDragover = (event) =>{
        event.preventDefault()

    }

    render() {
        return (
            <div class="myLists">
                my lists <button onClick={this.handleButtonClick}>list++</button>
                <div class="lists">
                    {this.state.lists ? this.state.lists.map((list,index) => <div class="list" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleDragover} onDrop={this.handleDrop} id={index} >{list.list}</div>) : null }
                </div>
            </div>
        );
    }
}

export default lists;