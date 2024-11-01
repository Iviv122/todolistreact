import './App.css';
import Display from './components/DisplayList/Display';
import Input from './components/Input/Input';
import { TasksProvider } from './context/List';

function App() {

  return (
    <div className='App'>
        <TasksProvider>        
          <Display/>
          <Input/>
        </TasksProvider>

    </div>
  );
}

export default App;
