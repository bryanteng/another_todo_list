import React, { Component, Fragment } from 'react';
import List from '../components/list'
import '../styles/list.css'

class lists extends Component {
    state ={
        lists:[]
    }

    handleButtonClick = () =>{
        this.setState({lists: [... this.state.lists, <List />]})
        console.log(this.state.lists)
    }

    render() {
        return (
            <div class="myLists">
                my lists <button onClick={this.handleButtonClick}>list++</button>
                <div class="lists">
                    {this.state.lists ? this.state.lists.map(list => <Fragment >{list}</Fragment>) : null }
                </div>
            </div>
        );
    }
}

export default lists;