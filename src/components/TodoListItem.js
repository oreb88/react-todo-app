import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div
                className={cn('checkbox', { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                {/*onClick 을 함수내에서 실행하지 않으면 랜더링시 실행됨.*/}
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
