import { useState } from 'react';

const InputForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const enrollForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title == '' || content == '') {
            alert('제목과 내용 모두 입력해주세요.');
            return;
        }
        //추가
    };

    return (
        <form className="m-20 flex " onSubmit={enrollForm}>
            <label className=" mr-3">제목</label>
            <input
                className="border-solid border-2 border-indigo-600  mr-3 w-2/5"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className=" mr-3">내용</label>
            <input
                className="border-solid border-2 border-indigo-600  mr-3 w-2/5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="border-solid border-2 border-indigo-600 ">추가</button>
        </form>
    );
};

export default InputForm;
