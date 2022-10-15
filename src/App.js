import {todo} from './Todo';
import TodoList from './TodoList';
import Input from './Input';

const App = () => {
  return (
    <>
    <Input/>
    <TodoList todo = {todo}/>
    </>
    
  )
}

export default App;
