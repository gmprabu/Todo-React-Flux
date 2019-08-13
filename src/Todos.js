import React from 'react';

import Todo from './Todo';

import TodoStore from './stores/TodoStore';

import * as TodoActions from "./actions/todoActions";

class ToDos extends React.Component {

   constructor() {
       super();
       this.state = {
           todoList: TodoStore.getAllTodos()
       }
   }

   componentWillMount() {
       TodoStore.on("todoChange" , this.getTodos);
   }

   componentWillUnmount() {
       // if we dont do this, will lead memory leak in the browser
       TodoStore.removeListener("todoChange");
    }

   getTodos = ()=> {
    this.setState( {
     todoList: TodoStore.getAllTodos()
    });
    }

  createTodo = () => {
        TodoActions.createTodo('test');
   }
   render() {
    const todoElements = this.state.todoList.map( (todo) => {
        return <Todo key={todo.id} {...todo}/>
    })

    return (
        <div>
            <h1>Todos</h1>
            <button onClick={this.createTodo}>Create!</button>
            <ul>{todoElements}</ul>
        </div>
    )
   }
}

export default ToDos;
