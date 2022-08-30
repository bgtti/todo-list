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
            newTodo: "",
            todoOnEdit: "",
        }
        this.changeTodoList = this.changeTodoList.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    renderTodoItems() {
        return (
            <div>
                {this.state.todoList.map(
                    item => (
                        <TodoItem todo={item.itemText} value={item} deleteItem={this.deleteItem}  ></TodoItem>
                    )
                )}
            </div>
        )
    }
    deleteItem(item) {
        //deletion
        console.log("deleting")
        this.setState(curState => ({
            todoList: curState.todoList.filter(i => i !== item)
        }));
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
            //...setState(st => ({nums: st.nums.filter(n=> n!==num)})) where num is arg to function
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

// renderTodoItems() {
//     return (
//         <div>
//             {this.state.todoList.map(
//                 item => (
//                     <TodoItem todo={item.itemText} value={item} editTodo={this.state.todoOnEdit} deleteItem={this.deleteItem} handleChange={this.handleChange}  ></TodoItem>
//                 )
//             )}
//         </div>
//     )
// }