export const initState = {
    todos: [],
    cloneTodosCompleted: [],
    todosCompleted: []
}

export const _getTodo = (todo) => {
    return {
        type: "GET_TODO",
        payload: todo
    }
}

export const _deleteItem = (todoId) => {
    return {
        type: "DELETE_TODO_ITEM",
        payload: todoId
    }
}

export const _clearItemTodoCompleted = () => {
    return {
        type: "CLEAR_TODO_COMPLETED"
    }
}

export const _toggleStatusTodo = (todoId) => {
    return {
        type: "TOGGLE_STATUS_TODO",
        payload: todoId
    }
}

export const _getTodoCompleted = (todoId) => {
    return {
        type: "TODO_COMPLETED",
        payload: todoId
    }
}
export const _deleteAllItems = () => {
    return {
        type: "DELETE_ALL_ITEMS",
    }
}

export const _searchTodoItem = (keyword) => {
    return {
        type: "SEARCH_TODO_ITEM",
        payload: keyword
    }
}
export function reducer(state = initState, { type, payload }) {
    switch (type) {

        case "GET_TODO":
            return {
                ...state,
                todos: [...state.todos, payload]
            }

        case "DELETE_ALL_ITEMS":
            return {
                ...state,
                todos: [],
                todosCompleted: []
            }

        case "CLEAR_TODO_COMPLETED":
            return {
                ...state,
                todosCompleted: []
            }

        case "DELETE_TODO_ITEM":
            const cloneTodosCompletedTag = JSON.parse(JSON.stringify(state.todos))
            const indexOfCompletedTag = cloneTodosCompletedTag.findIndex(item => item.id == payload)
            cloneTodosCompletedTag[indexOfCompletedTag].checked = false
            return {
                ...state,
                todos: cloneTodosCompletedTag,
                todosCompleted: state.todosCompleted.filter(item => item.id !== payload),
                cloneTodosCompleted: state.todosCompleted
            }

        case "TODO_COMPLETED":
            const cloneTodos = JSON.parse(JSON.stringify(state.todos))
            const indexOf = cloneTodos.findIndex(item => item.id == payload)
            cloneTodos[indexOf].checked = true
            return {
                ...state,
                todos: cloneTodos,
                todosCompleted: [...state.todosCompleted, cloneTodos[indexOf]],
                cloneTodosCompleted: state.todosCompleted
            }

        case "TOGGLE_STATUS_TODO":
            const cloneTodosToggle = JSON.parse(JSON.stringify(state.todos))
            const indexOfToggle = cloneTodosToggle.findIndex(item => item.id == payload)
            cloneTodosToggle[indexOfToggle].checked = !cloneTodosToggle[indexOfToggle].checked
            return {
                ...state,
                todos: cloneTodosToggle,
                todosCompleted: state.todosCompleted.filter(item => item.id !== payload),
                cloneTodosCompleted: state.todosCompleted
            }

        case "SEARCH_TODO_ITEM":
            return {
                ...state,
                cloneTodosCompleted: state.todosCompleted.filter(item => item.title.toLowerCase().includes(payload))
            }
    }
}
