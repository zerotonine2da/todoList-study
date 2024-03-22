import './App.css';
import InputForm from './components/InputForm';
import TodoContent from './components/TodoContent';

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Todo List</h1>

            <InputForm />
            <TodoContent />
        </>
    );
}

export default App;
