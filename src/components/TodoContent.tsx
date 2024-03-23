import { useAppSelector } from '../redux/hook/useTodos';
import Button from './Button';

type props = {
    isDoneTodo: boolean;
};

const TodoContent = ({ isDoneTodo }: props) => {
    const todos = useAppSelector((state) => state.todos);

    return (
        <>
            <div>{isDoneTodo ? <>Todo</> : <>Done</>} </div>
            {todos
                .filter((todo) => todo.isDone === isDoneTodo)
                .map((todo) => {
                    return (
                        <div key={todo.id} className="border-solid border-2 border-indigo-600  ">
                            <h1>{todo.title}</h1>
                            <h3>{todo.content}</h3>

                            <Button TodoId={todo.id} TodoState={'삭제'} />
                            <Button TodoId={todo.id} TodoState={todo.isDone ? '취소' : '완료'} />
                        </div>
                    );
                })}
        </>
    );
};

export default TodoContent;
