import { Button } from 'antd/es/radio'
import React from 'react'
import { useTodoContext } from '../../context/TodoContext'
function DeleteAll() {
    const { deleteAllItems } = useTodoContext()
    return (
        <>
            <Button onClick={() => deleteAllItems()} >
                Delete All
            </Button>
        </>
    )
}

export default DeleteAll