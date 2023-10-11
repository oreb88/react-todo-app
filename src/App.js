import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function createBulkTodos() {
    const array = [];

    for (let i = 1; i < 2500; i++) {
        array.push({
            id: i,
            text: `할 일${i}`,
            checked: false,
        });
    }

    return array;
}

function App() {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: '리액트 기초 알아보기',
    //         checked: true,
    //     },
    //     {
    //         id: 2,
    //         text: '컴포넌트 스타일링 해보기',
    //         checked: true,
    //     },
    //     {
    //         id: 3,
    //         text: '일정 관리앱 만들어보기',
    //         checked: false,
    //     },
    // ]);

    const [todos, setTodos] = useState(createBulkTodos);

    //고윳값으로 사용될 id
    const nextId = useRef(4);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false,
        };

        console.log(todo);

        setTodos((todos) => todos.concat(todo));
        nextId.current += 1;
    }, []);

    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
