import { Button, Input, List } from 'antd'
import React, { useState } from 'react'
import { useTodoContext } from '../../context/TodoContext'

function TodoInput() {
    const [input, setInput] = useState("")
    const { getTodoItem } = useTodoContext()

    function addItemTodo() {
        if (input == "") {
            alert("Write input!")
        } else {
            const inputField = {
                checked: false
            }
            inputField["id"] = Date.now()
            inputField["title"] = input
            getTodoItem(inputField)
            setInput("")
        }
    }

    return (
        <>
            <Input placeholder="Please enter todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <Button type="primary" onClick={() => addItemTodo()}>Add</Button>
        </>
    )
}

export default TodoInput