import { Provider } from 'react-redux';
import './App.css';
import InputForm from './components/InputForm';
import TodoContent from './components/TodoContent';
import store from './redux/config/configStore';

function App() {
    return (
        <Provider store={store}>
            <h1 className="text-3xl font-bold underline">Todo List</h1>

            <InputForm />
            <TodoContent isDoneTodo={false} />
            <TodoContent isDoneTodo={true} />
        </Provider>
    );
}

export default App;
