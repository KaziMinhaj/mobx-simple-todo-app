import {useState} from 'react';
import { observer } from "mobx-react-lite"
import {todo} from "./Todo"

const Input = observer(() => {
    const [state, setState] = useState("")
    const handleChange = (event) => {
        setState(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        todo.AddToList(state);
        setState("")
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
        <label>Add a Todo </label>
        <br/>
        <input value={state} onChange={(event) => handleChange(event)}/>
        </form>
    )
})

export default Input;