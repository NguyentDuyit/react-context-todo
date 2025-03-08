import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useTodoContext } from '../../context/TodoContext'
function TodoSearchCompleted() {
    const [search, setSearch] = useState("")
    const { searchTodoItem } = useTodoContext()
    return (
        <>
            <Input placeholder="Please enter todo" onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={() => searchTodoItem(search)} >Search</Button>
        </>
    )
}

export default TodoSearchCompleted