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
        this.setState({lists: [...this.state.lists,{list: <List/>, id: this.state.counter}], counter: this.state.counter+1 })
        console.log(event.target.className)
    }

    handleDrag = (event)=>{
        console.log(event.dataTransfer.items, "drag")
        this.setState({draggedItem: event.target})
    }

    handleDrop = (event) =>{
        event.preventDefault()
        console.log(event.target, "this is drop")
        let filtered = this.state.lists.filter(list => list.id !== ~~event.target.id)
        this.setState({draggedItem: event.target, lists: filtered})
    }

    handleDragover = (event) =>{
        event.preventDefault()
        console.log(this.state.draggedItem, "this is dragged item when dragover")
        if(event.target.id && event.target.className === "list"){
            if(event.target.id < this.state.draggedItem.id){
                console.log("item is moving left")
                let lists=this.state.lists
                let temp = [...lists].slice(0,event.target.id)
                temp.push(this.state.draggedItem)
                temp = temp.concat(lists.slice(event.target.id, lists.length-1))
                this.setState({lists: temp})    
            }else{
                console.log("item is moving right")
            }
        }
    }

    render() {
        return (
            <div class="myLists">
                my lists <button class="imaButton" onClick={this.handleButtonClick}>list++</button>
                <div class="lists">
                    {this.state.lists ? this.state.lists.map((list,index) => <div class="list" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleDragover} onDrop={this.handleDrop} id={index} >{list.list}</div>) : null }
                </div>
            </div>
        );
    }
}

export default lists;