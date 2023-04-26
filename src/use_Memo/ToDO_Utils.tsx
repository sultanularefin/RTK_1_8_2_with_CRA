
export interface one_ToDO_Interface{
    id: number,//index_Value,
    text: string,//`Todo ${index_Value + 1}`,
    completed: boolean,//Math.random() > 0.5
}


const createTodos =()=> {
    const todos:one_ToDO_Interface[] = [];
    for (let index_Value = 0; index_Value < 50; index_Value++) {
        todos.push({
            id: index_Value,
            text: `Todo ${index_Value + 1}`,
            completed: Math.random() > 0.5
        });
    }
    return todos;
};

const filterTodos=(todos:one_ToDO_Interface[], tab:string)=> {
    console.log(`[ARTIFICIALLY SLOW] Filtering ${todos.length} todos for "${tab}" tab.`);


    const startTime = performance.now();

    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return todos.filter((todo:one_ToDO_Interface) => (
            (tab==='all')
                ?true
                : (tab ==='active')
                    ?(!todo.completed)
                    :(tab==='completed')
                        ?(todo.completed)
                        :false
        )
        /*  {
              if (tab === 'all') {
                  return true;
              } else if (tab === 'active') {
                  return !todo.completed;
              } else if (tab === 'completed') {
                  return todo.completed;
              }
          }*/
    );
};

export  {
    createTodos,
    filterTodos,

};
