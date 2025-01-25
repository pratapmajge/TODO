import React from "react";
import { useContext , createContext} from "react";

export const TodoContext= createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed: false
    }],
     // all these are seperated by comma these are simple like variable but one is array another is function like that
    addtodo: (todo) => {

    },

    updatetodo: (id , todo) => {},

    deletetodo: (id) =>{},

    togglecomplete: (id) =>{},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider