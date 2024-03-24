import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook/useTodos';
import { addTodos } from '../redux/module/todoSlice';
import uuid4 from 'uuid4';
import Alert from './Alert';
import { closeAlert } from '../redux/module/alertSlice';

const InputForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const showAlert = useAppSelector((state) => state.alert);
    const dispatch = useAppDispatch();

    const enrollForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title == '' || content == '') {
            dispatch(closeAlert(false));
            return;
        }

        const newTodo = {
            title,
            content,
            isDone: false,
            id: uuid4(),
        };
        //추가
        dispatch(addTodos(newTodo));
        setTitle('');
        setContent('');
        dispatch(closeAlert(true));
    };

    return (
        <>
            <form className="m-20 flex flex-col " onSubmit={enrollForm}>
                <div className="mb-5 flex">
                    <input
                        className=" w-full h-full bg-transparent outline-0 
                     placeholder-shown:border-t-blue-gray-200 border 
                     focus:border-2 
                     text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
                     focus:border-blue-500 "
                        placeholder="제목을 입력하세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-5 flex">
                    <input
                        className=" w-full h-full bg-transparent outline-0 
                   placeholder-shown:border-t-blue-gray-200 border 
                   focus:border-2 
                   text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
                   focus:border-blue-500 "
                        placeholder="내용을 입력하세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                {showAlert && <Alert />}
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
                    추가
                </button>
            </form>
        </>
    );
};

export default InputForm;
