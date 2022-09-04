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
                { id: uuidv4(), itemText: "buy potatoes" },
                { id: uuidv4(), itemText: "take trash out" }
            ],
            newTodo: "",
            todoOnEdit: "",
        }
        this.changeTodoList = this.changeTodoList.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    renderTodoItems() {
        return (
            <div>
                {this.state.todoList.map(
                    item => (
                        <TodoItem todo={item.itemText} value={item} deleteItem={this.deleteItem} editItem={this.editItem} handleChange={this.handleChange} todoOnEdit={this.state.todoOnEdit} ></TodoItem>
                    )
                )}
            </div>
        )
    }
    deleteItem(item) {
        this.setState(curState => ({
            todoList: curState.todoList.filter(i => i !== item)
        }));
        this.renderTodoItems();

    }
    editItem(item) {
        const allToDos = [...this.state.todoList];
        const todoIndex = allToDos.findIndex(todo => {
            return todo.id === item.id;
        })
        allToDos[todoIndex].itemText = this.state.todoOnEdit;
        this.setState(curState => ({
            todoList: [...allToDos],
            todoOnEdit: ""
        }))
        this.renderTodoItems();

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
                <form onSubmit={this.handleSubmit} className='TodoContainer-addNewTodoContainer'>
                    <label htmlFor="newTodo">Add New Todo:</label>
                    <div >
                        <input name="newTodo" id="newTodo" type="text" placeholder="New Todo" value={this.state.newTodo} onChange={this.handleChange} className='TodoContainer-AddTodoInput' />
                        <button className='TodoContainer-AddTodoBtn'>Add Todo</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default TodoContainer;