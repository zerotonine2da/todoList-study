import { FcViewDetails } from 'react-icons/fc';

export default function Header() {
    return (
        <div>
            <div className="flex items-center justify-center mt-10">
                <FcViewDetails size={30} />

                <h1 className="text-2xl font-bold m-2 "> Todo List</h1>
            </div>
        </div>
    );
}
