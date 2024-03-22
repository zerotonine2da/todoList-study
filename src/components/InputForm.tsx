import { useState } from 'react';

export default function InputForm() {
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
        <form onSubmit={enrollForm}>
            <label>제목</label>
            <input
                className="border-solid border-2 border-indigo-600"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>내용</label>
            <input
                className="border-solid border-2 border-indigo-600"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="border-solid border-2 border-indigo-600">추가</button>
        </form>
    );
}
