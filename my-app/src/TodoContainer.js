import React, { Component } from 'react';
import './TodoContainer.css';
import TodoItem from './TodoItem.js';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { id: uuidv4(), itemText: "buy bananas" },
                { id: uuidv4(), itemText: "buy potatoes" }
            ],
            newTodo: ""
        }
        this.changeTodoList = this.changeTodoList.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    renderTodoItems() {
        return (
            <div>
                {this.state.todoList.map(
                    item => (
                        <TodoItem todo={item.itemText}></TodoItem>
                    )
                )}
            </div>
        )

    }
    changeTodoList() {
        let newItem = { id: uuidv4(), itemText: this.state.newTodo };
        this.setState(curState => {
            return {
                todoList: [...curState.todoList, newItem],
                newTodo: "",
            }
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.changeTodoList();
        this.renderTodoItems();
    }
    render() {
        return (
            <div className='TodoContainer'>
                <h1>Todo List</h1>
                <hr />
                {this.renderTodoItems()}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newTodo">New Todo</label>
                    <div>
                        <input name="newTodo" id="newTodo" type="text" placeholder="New Todo" value={this.state.newTodo} onChange={this.handleChange} />
                        <button>Add Todo</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default TodoContainer;