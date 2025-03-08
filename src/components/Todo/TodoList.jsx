import { Checkbox, Typography } from 'antd'
import React from 'react'
import { useTodoContext } from '../../context/TodoContext'

function TodoList() {
    const { Text } = Typography;
    const { state, checkLocalTodos, getTodoCompleted, toggleStatusTodo } = useTodoContext()
    const todoList = state.todos.length > 0 ? state.todos : checkLocalTodos

    function onChangeTodo(id) {
        const indexOf = state.todosCompleted.findIndex(item => item.id == id)
        if (indexOf < 0) {
            getTodoCompleted(id)
        } else {
            toggleStatusTodo(id)
        }
    }


    return (
        <>
            {todoList?.map((item) => {
                return (
                    <Checkbox key={item.id}
                        onChange={() => onChangeTodo(item.id)}
                        checked={item.checked ? true : false}
                    >{item.checked ? <Text delete>{item.title}</Text> : item.title}
                    </Checkbox>
                )
            })}
        </>
    )
}

export default TodoList