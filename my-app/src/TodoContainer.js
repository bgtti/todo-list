import React, { Component } from 'react';
import './TodoContainer.css';
import TodoItem from './TodoItem.js'

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        }
        this.changeTodoList = this.changeTodoList.bind(this);
    }
    changeTodoList(item) {
        this.setState(curState => {
            return {
                todoList: [...curState.todoList, item],
            }
        })
    }
    render() {
        return (
            <div className='TodoContainer'>
                <h1>Todo List</h1>
                <hr />
                <TodoItem></TodoItem>
                <form action="">
                    <label htmlFor="newTodo">New Todo</label>
                    <div>
                        <input name="newTodo" id="newTodo" type="text" placeholder="New Todo" />
                        <button>Add Todo</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default TodoContainer;