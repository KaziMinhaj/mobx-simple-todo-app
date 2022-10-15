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
}

export const todo = new Todo();