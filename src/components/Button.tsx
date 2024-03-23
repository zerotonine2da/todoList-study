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

    return (
        <button className="border-solid border-2 border-indigo-600 " onClick={onClickButton}>
            {button}
        </button>
    );
}
