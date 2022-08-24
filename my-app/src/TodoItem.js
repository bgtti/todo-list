import React, { Component } from 'react';
import './TodoItem.css';
import './icons/pencil.png';
import './icons/trash.png';

class TodoItem extends Component {
    render() {
        return (
            <div className='TodoItem'>
                <p>{this.props.todo}</p>
                <input type="image" name="edit" src='./icons/pencil.png' alt="edit" />
                <input type="image" name="delete" src='./icons/trash.png' alt="delete" />
            </div>
        )
    }
}
export default TodoItem;