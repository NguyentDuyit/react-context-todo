import { Tabs, Input, Button, Flex, Typography } from 'antd';
import TodoList from './components/Todo/TodoList';
import '@ant-design/v5-patch-for-react-19';
import TodoInput from './components/Todo/TodoInput';
import DeleteAll from './components/Button/DeleteAll';
import TodoListCompleted from './components/Todo/TodoListCompleted';
import TodoInputSearch from './components/Todo/TodoInputSearch';
function App() {
  const { Text } = Typography;
  const items = [
    {
      key: '1',
      label: 'All',
      children: (
        <>
          <Flex gap="small">
            <TodoInput />
          </Flex>
          <br />
          <Flex vertical="column">
            <TodoList />
          </Flex>
          <br />
          <Flex gap="small" justify="end">
            <DeleteAll />
          </Flex>
        </>
      ),
    },
    {
      key: '2',
      label: 'Completed',
      children: (
        <>
          <Flex gap="small">
            <TodoInputSearch />
          </Flex>
          <br />
          <Flex vertical="column">
            <TodoListCompleted />
          </Flex>
        </>
      ),
    },
  ];
  // const onChange = (key) => {
  //   console.log(key);
  // };

  return (
    <>
      <div className="App">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >Todo Tracker</h1>
        <Tabs
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          defaultActiveKey="1" items={items} />
      </div>
    </>
  )
}

export default App
