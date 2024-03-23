import { Provider } from 'react-redux';
import './App.css';
import InputForm from './components/InputForm';
import TodoContent from './components/TodoContent';
import store from './redux/config/configStore';
import { FcViewDetails } from 'react-icons/fc';

function App() {
    return (
        <Provider store={store}>
            <div className="flex flex-col items-center">
                <header>
                    <div className="flex items-center justify-center">
                        <FcViewDetails size={30} />

                        <h1 className="text-3xl font-bold m-2"> Todo List</h1>
                    </div>
                </header>
                <main className=" border-solid border-2  w-[1000px]   ">
                    <InputForm />
                    <TodoContent isDoneTodo={false} />
                    <TodoContent isDoneTodo={true} />
                </main>
            </div>
        </Provider>
    );
}

export default App;
