import {observer} from 'mobx-react-lite'

const TodoList = observer(({todo}) => {
    const todos = todo.TodoList.map((t)=>{
        return <li key={t}>{t}</li>
    })
    return(
        <ul>
            {todos}
        </ul>
    )
    })

export default TodoList;