import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {
    initState,
    reducer,
    _getTodo,
    _deleteAllItems,
    _getTodoCompleted,
    _toggleStatusTodo,
    _deleteItem,
    _searchTodoItem
} from "../reducer/stateReducer";

const TodoContext = createContext()
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const checkLocalTodos = JSON.parse(localStorage.getItem("listItems"))
    const checkLocalTodosCompleted = JSON.parse(localStorage.getItem("listItemsCompleted"))
    function searchTodoItem(keyword) {
        console.log(keyword)
        dispatch(_searchTodoItem(keyword))
    }

    function getTodoItem(todoItem) {
        dispatch(_getTodo(todoItem))
    }

    function deleteItem(todoId) {
        dispatch(_deleteItem(todoId))
    }

    function deleteAllItems() {
        localStorage.removeItem("listItems")
        dispatch(_deleteAllItems)
    }

    function getTodoCompleted(id) {
        dispatch(_getTodoCompleted(id))
    }

    function toggleStatusTodo(id) {
        dispatch(_toggleStatusTodo(id))
    }

    useEffect(() => {
        if (state.todos.length > 0) {
            localStorage.setItem("listItems", JSON.stringify(state.todos))
        } else {
            if (checkLocalTodos) {
                state.todos = checkLocalTodos
            }
        }
        if (state.todosCompleted.length > 0) {
            localStorage.setItem("listItemsCompleted", JSON.stringify(state.todosCompleted))
        } else {
            if (checkLocalTodosCompleted) {
                state.todosCompleted = checkLocalTodosCompleted
            }
        }
    }, [state.todos, state.todosCompleted])

    return (
        <TodoContext.Provider
            value={{
                state,
                getTodoItem,
                checkLocalTodos,
                deleteAllItems,
                getTodoCompleted,
                toggleStatusTodo,
                checkLocalTodosCompleted,
                deleteItem,
                searchTodoItem
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)