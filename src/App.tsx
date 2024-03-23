import { Provider } from 'react-redux';
import './App.css';
import InputForm from './components/InputForm';
import TodoContent from './components/TodoContent';
import store from './redux/config/configStore';

function App() {
    return (
        <Provider store={store}>
            <header>
                <h1 className="text-3xl font-bold underline">Todo List</h1>
            </header>
            <main>
                <InputForm />
                <TodoContent isDoneTodo={false} />
                <TodoContent isDoneTodo={true} />
            </main>
        </Provider>
    );
}

export default App;
