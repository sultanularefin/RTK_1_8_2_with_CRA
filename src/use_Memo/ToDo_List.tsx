

import React, { useMemo } from 'react';
import {filterTodos, one_ToDO_Interface} from "./ToDO_Utils";
// import {filterTodos, one_ToDO_Interface} from './ToDO_Utils.js';


export interface ToDo_List_Props{

    todos: one_ToDO_Interface[],//any,//{todos}
    tab: string,
    theme: string,//boolean,

}







const ToDo_List: React.FC<ToDo_List_Props> = ({
                                                  // navigation,
                                                  todos,
                                                  theme,
                                                  tab
                                                  // route
                                              }) => {
    // const ToDo_List=({ todos, theme, tab })=> {


    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    return (
        <div className={theme}>
            <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
            <ul>
                {visibleTodos.map((todo:one_ToDO_Interface,index: number) => (
                    <li key={todo.id}>
                        {
                            (todo.completed) ?
                            <s>{todo.text}</s> :
                            todo.text
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default ToDo_List;
