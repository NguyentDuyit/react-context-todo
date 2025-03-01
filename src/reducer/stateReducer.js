export const initState = {
    todos: [],
    fakeTodosCompleted: [],
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
                todos: []
            }

        case "DELETE_TODO_ITEM":
            const cloneTodosCompletedTag = JSON.parse(JSON.stringify(state.todos))
            const indexOfCompletedTag = cloneTodosCompletedTag.findIndex(item => item.id == payload)
            cloneTodosCompletedTag[indexOfCompletedTag].checked = !cloneTodosCompletedTag[indexOfCompletedTag].checked
            return {
                ...state,
                todos: cloneTodosCompletedTag,
                todosCompleted: state.todosCompleted.filter(item => item.id !== payload),
                fakeTodosCompleted: state.todosCompleted
            }

        case "TODO_COMPLETED":
            const cloneTodos = JSON.parse(JSON.stringify(state.todos))
            const indexOf = cloneTodos.findIndex(item => item.id == payload)
            cloneTodos[indexOf].checked = !cloneTodos[indexOf].checked
            return {
                ...state,
                todos: cloneTodos,
                todosCompleted: [...state.todosCompleted, cloneTodos[indexOf]],
                fakeTodosCompleted: state.todosCompleted
            }

        case "TOGGLE_STATUS_TODO":
            const cloneTodosToggle = JSON.parse(JSON.stringify(state.todos))
            const indexOfToggle = cloneTodosToggle.findIndex(item => item.id == payload)
            cloneTodosToggle[indexOfToggle].checked = !cloneTodosToggle[indexOfToggle].checked
            return {
                ...state,
                todos: cloneTodosToggle,
                todosCompleted: state.todosCompleted.filter(item => item.id !== payload),
                fakeTodosCompleted: state.todosCompleted
            }

        case "SEARCH_TODO_ITEM":
            console.log(state.fakeTodosCompleted)
            return {
                ...state,
                todosCompleted: state.fakeTodosCompleted.filter(item => item.title.toLowerCase().includes(payload))
            }
    }
}
