import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    //함수를 한번 만들고 재사용하도록useCallback
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
