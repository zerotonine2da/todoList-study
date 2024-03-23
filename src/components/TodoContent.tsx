import { useAppSelector } from '../redux/hook/useTodos';
import Button from './Button';
import { FcSportsMode } from 'react-icons/fc';
import { FcOk } from 'react-icons/fc';
type props = {
    isDoneTodo: boolean;
};

const TodoContent = ({ isDoneTodo }: props) => {
    const todos = useAppSelector((state) => state.todos);

    return (
        <>
            <div className="font-bold text-xl text-left ml-16  mt-4">
                {isDoneTodo ? (
                    <div className="flex items-center">
                        <FcOk />
                        <p className="ml-2">Done</p>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <FcSportsMode />
                        <p className="ml-2">Todo</p>
                    </div>
                )}{' '}
            </div>
            <div className="flex flex-wrap ml-12">
                {todos
                    .filter((todo) => todo.isDone === isDoneTodo)
                    .map((todo) => {
                        return (
                            <div
                                key={todo.id}
                                className="border-solid border border-blue-500 mb-5 rounded-lg m-3 p-7  "
                            >
                                <h1 className="font-bold mb-3">{todo.title}</h1>
                                <h3 className="mb-3"> {todo.content}</h3>

                                <Button TodoId={todo.id} TodoState={'삭제'} />
                                <Button TodoId={todo.id} TodoState={todo.isDone ? '취소' : '완료'} />
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default TodoContent;
