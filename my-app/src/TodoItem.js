import React, { Component } from 'react';
import './TodoItem.css';
import EditIcon from './icons/pencil.png';
import DeleteIcon from './icons/trash.png';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete(e) {
        this.props.deleteItem(this.props.value); //value in parent, deleteItem in parent
    }
    // handleEdit(e) {
    //     this.props.handleChange(e); //handleChange is method in parent
    // }
    render() {
        return (
            <div className='TodoItem'>
                <p>{this.props.todo}</p>

                <input type="image" name="edit" src={EditIcon} alt="edit" className='TodoItem-icon' />
                <input type="image" name="delete" src={DeleteIcon} alt="delete" className='TodoItem-icon' onClick={this.handleDelete} />
            </div>
        )
    }
}
export default TodoItem;

//<input name="editTodo" id="editTodo" type="text" placeholder={this.props.todo} value={this.state.editTodo} onChange={this.handleEdit} />