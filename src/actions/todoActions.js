import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type:"CREATE_TODO",
        text
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type:"DELTE_TODO",
        id
    })
}