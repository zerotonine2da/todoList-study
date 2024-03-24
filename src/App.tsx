import { Provider } from 'react-redux';
import './App.css';
import InputForm from './components/InputForm';
import TodoContent from './components/TodoContent';
import store from './redux/config/configStore';
import Header from './components/Header';
import DarkMode from './components/DarkMode';

function App() {
    return (
        <Provider store={store}>
            <div className="flex flex-col items-center dark:bg-slate-950 dark:text-white">
                <header className="flex items-center justify-center">
                    <Header />
                </header>
                {/* <main className=" w-[1000px]"> */}
                <main className=" md:w-2/3  lg:w-2/4">
                    <div className="flex flex-row-reverse mr-20 ">
                        <DarkMode />
                    </div>
                    <InputForm />
                    <TodoContent isDoneTodo={false} />
                    <TodoContent isDoneTodo={true} />
                </main>
            </div>
        </Provider>
    );
}

export default App;
