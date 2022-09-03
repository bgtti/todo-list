import React, { Component } from 'react';
import './TodoItem.css';
import EditIcon from './icons/pencil.png';
import DeleteIcon from './icons/trash.png';
import SaveIcon from './icons/save.png';

//Icons source:
//Edit icon created by Pixel perfect from https://www.flaticon.com/free-icons/edit
//Delete icon created by bqlqn from: https://www.flaticon.com/free-icons/edit
//Save icon created by Yogi Aprelliyanto from: https://www.flaticon.com/free-icons/save

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.schwitchMode = this.schwitchMode.bind(this);
    }
    handleDelete(e) {
        this.props.deleteItem(this.props.value); //value in parent, deleteItem in parent
    }
    schwitchMode(e, mode) {
        let todoItemContainer = e.currentTarget.parentNode;
        let editModeItems = todoItemContainer.querySelectorAll('.EditMode');
        let displayModeItems = todoItemContainer.querySelectorAll('.DisplayMode');

        if (mode === "edit") {
            editModeItems.forEach(item => item.classList.remove('hide'));
            displayModeItems.forEach(item => item.classList.add('hide'));
        } else if (mode === "display") {
            editModeItems.forEach(item => item.classList.add('hide'));
            displayModeItems.forEach(item => item.classList.remove('hide'));
        }
    }
    handleEdit(e) {
        this.schwitchMode(e, "edit");
    }
    handleSave(e) {
        this.schwitchMode(e, "display");
        this.props.editItem(this.props.value);
    }
    render() {
        return (
            <div className='TodoItem'>
                <p className='DisplayMode'>{this.props.todo}</p>
                <input name="todoOnEdit" id="todoOnEdit" type="text" placeholder={this.props.todo} value={this.props.todoOnEdit} className="TodoItem-Input EditMode hide" onChange={this.props.handleChange} />
                <input type="image" name="edit" src={SaveIcon} alt="save" className='TodoItem-icon EditMode hide' onClick={this.handleSave} />
                <input type="image" name="save" src={EditIcon} alt="edit" className='TodoItem-icon DisplayMode' onClick={this.handleEdit} />
                <input type="image" name="delete" src={DeleteIcon} alt="delete" className='TodoItem-icon DisplayMode' onClick={this.handleDelete} />
            </div>
        )
    }
}
export default TodoItem;

