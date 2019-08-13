import {EventEmitter} from "events";

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
        super();
         this.todoList = [
                { id:1, text:'Learn ReactJS',complete : false},
                { id:2,text:'Learn NodeJs',complete : false},
                { id:3, text:'Learn AWS',complete : false},
                { id:4,text:"Learn Docker",complete: false}
            ]
        
    }
    getAllTodos() {
        return this.todoList;
    }

    createTodo(text) {
        const id = Date.now();
        this.todoList.push( { id , text, complete: false});

        this.emit("todoChange");
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO" : {
                this.createTodo(action.text);
            }

        }
        console.log(action);
    }

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;