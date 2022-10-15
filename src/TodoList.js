import {observer} from 'mobx-react-lite'
import { todo } from './Todo'
const TodoList = observer(({todo}) => {
    const todos = todo.TodoList.map((t)=>{
        return (
            <div key={t.id} style={{display:"flex", margin: "5px"}}>
            <li >{t.content}</li>
            <button style={{color:"red", marginLeft: "10px"}} onClick={() => todo.Delete(t.id)}>
                    delete
            </button>
            </div>
        )
    })
    return(
        <ul>
            {todos}
        </ul>
    )
    })

export default TodoList;