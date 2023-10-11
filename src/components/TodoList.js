import './TodoList.scss';
import TodoListItem from './TodoListItem';
import React from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div color="TodoList">
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

//컴퍼넌트가 React.memo()로 래핑 시
//React는 컴퍼넌트를 렌더링하고 렌더링 된 결괄를 캐싱한다.
//다음 렌더링이 일어날 때 props 가 기존과 같다면, React는 캐싱 된 내용을 재사용한다.
export default React.memo(TodoList);
