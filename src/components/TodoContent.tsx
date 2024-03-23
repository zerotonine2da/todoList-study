import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';

type props = {
    isDoneTodo: boolean;
};

const TodoContent = ({ isDoneTodo }: props) => {
    const todos = useSelector((state: RootState) => state.todos);

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
                            <button className="border-solid border-2 border-indigo-600 mr-5 ">삭제</button>
                            <button className="border-solid border-2 border-indigo-600 ">완료</button>
                        </div>
                    );
                })}
        </>
    );
};

export default TodoContent;
