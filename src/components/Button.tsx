import { useState } from 'react';
import { useAppDispatch } from '../redux/hook/useTodos';
import { deleteTodos, switchTodoState } from '../redux/module/todoSlice';

type props = {
    TodoId: string;
    TodoState: string;
};

export default function Button({ TodoId, TodoState }: props) {
    const dispatch = useAppDispatch();
    const [button] = useState(TodoState);

    const onClickButton = () => {
        switch (button) {
            case '삭제':
                deleteTodo();
                break;
            case '취소':
            case '완료':
                switchTodo();
                break;
            default:
                break;
        }
    };

    //삭제
    const deleteTodo = () => {
        dispatch(deleteTodos(TodoId));
    };

    //상태 변경
    const switchTodo = () => {
        dispatch(switchTodoState(TodoId));
    };

    const buttonClass =
        button === '삭제'
            ? 'border-red-500  hover:bg-red-500 text-red-700'
            : 'border-blue-500 hover:bg-blue-500 text-blue-700 ';

    return (
        <button
            className={`bg-transparent font-semibold hover:text-white py-2 px-4 border rounded mr-2 ${buttonClass}`}
            onClick={onClickButton}
        >
            {button}
        </button>
    );
}
