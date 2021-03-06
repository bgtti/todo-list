//In this file: Board page display of HTML Elements 
import "./boardsContent.css";

let BoardPage = (function () {
    //Section 1: header
    let topSection = document.createElement('section');
    topSection.classList.add('board-content-section-header');

    let boardName = document.createElement('h2')

    let mainBtnsContainer = document.createElement('div');
    mainBtnsContainer.classList.add('board-content-main-btns-container')

    let addToDoBtn = document.createElement('div');
    addToDoBtn.textContent = "Add to do";
    addToDoBtn.classList.add("btn-type-2");

    let editBoardBtn = document.createElement('div');
    editBoardBtn.textContent = "Edit board";
    editBoardBtn.classList.add("btn-type-1");

    let deleteBoardBtn = document.createElement('div');
    deleteBoardBtn.textContent = "Delete board";
    deleteBoardBtn.classList.add("btn-type-1");

    mainBtnsContainer.append(addToDoBtn, editBoardBtn, deleteBoardBtn);

    topSection.append(boardName, mainBtnsContainer);

    // section 2: content
    let mainSection = document.createElement('section');

    return {
        topSection, //used in function in boards.js
        mainSection, //used in function in boards.js
        boardName, //used in function in boards.js

        addToDoBtn, //used in event listener index.js ///check /used in boards.js to add dataset

        editBoardBtn, //used in boards.js to disable in All boards 
        deleteBoardBtn, //used in boards.js to disable in All boards & Default board
    }
})()

export { BoardPage } 