import { makeAutoObservable } from "mobx"

class Todo{
    todoList = [];
    constructor(){
        makeAutoObservable(this);
    }
    get TodoList()
    {
        return this.todoList;
    }

    AddToList(todo)
    {
        this.todoList.push(todo);
    }

    Delete(id)
    {
        this.todoList = this.todoList.filter((item) => item.id != id)
    }
}

export const todo = new Todo();