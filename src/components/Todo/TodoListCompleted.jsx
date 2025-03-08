import React from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { Button, Flex, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

function TodoListCompleted() {
    const { Text } = Typography;
    const { state, checkLocalTodosCompleted, deleteItem, clearItemTodoCompleted, isSearching } = useTodoContext()
    const todoListCompleted = state.todosCompleted.length > 0 ? state.todosCompleted : checkLocalTodosCompleted
    const cloneListTodoCompleted = state.cloneTodosCompleted.length > 0 ? state.cloneTodosCompleted : checkLocalTodosCompleted

    function deleteTodoItem(id) {
        if (todoListCompleted.length == 1) {
            localStorage.removeItem("listItemsCompleted")
            clearItemTodoCompleted()
            deleteItem(id)
        } else {
            deleteItem(id)
        }
    }

    return (
        <>
            {isSearching ?
                cloneListTodoCompleted?.map((item) => {
                    return (
                        <Flex justify="space-between" align="center"
                            key={item.id}
                        >
                            <Text>{item.title}</Text>
                            <Button
                                danger shape="circle" icon={<DeleteOutlined />} />
                        </Flex>
                    )
                }) : todoListCompleted?.map((item) => {
                    return (
                        <Flex justify="space-between" align="center"
                            key={item.id}
                        >
                            <Text>{item.title}</Text>
                            <Button
                                onClick={() => deleteTodoItem(item.id)}
                                danger shape="circle" icon={<DeleteOutlined />} />
                        </Flex>
                    )
                })}
        </>
    )
}

export default TodoListCompleted