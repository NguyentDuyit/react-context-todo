import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { useDebounce } from "use-debounce";
function TodoInputSearch() {
    const [search, setSearch] = useState("")
    const [debouncedValue] = useDebounce(search, 500);
    const { searchTodoItem } = useTodoContext()
    return (
        <>
            <Input placeholder="Please enter todo" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={() => searchTodoItem(search)} >Search</Button>
        </>
    )
}

export default TodoInputSearch