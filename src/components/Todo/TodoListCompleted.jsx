import React from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { Button, Flex, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

function TodoListCompleted() {
    const { Text } = Typography;
    const { state, checkLocalTodosCompleted, deleteItem } = useTodoContext()
    const todoListCompleted = state.todosCompleted.length > 0 ? state.todosCompleted : checkLocalTodosCompleted

    function deleteTodoItem(id) {
        deleteItem(id)
    }

    return (
        <>
            {todoListCompleted?.map((item) => {
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