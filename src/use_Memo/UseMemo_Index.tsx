
import React, {useState} from "react";
import {createTodos, one_ToDO_Interface} from "./ToDO_Utils";
import ToDo_List from "./ToDo_List";
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in a src/App.scss */

// import "bootstrap/scss/bootstrap";

// import React, { useState } from 'react';
// import {createTodos, one_ToDO_Interface} from './ToDO_Utils.js';
// import TodoList from './ToDo_List.js';

const todos:one_ToDO_Interface[] = createTodos();

export interface UseMemo_Index_Props{


}

import Button from 'react-bootstrap/Button';

const UseMemo_Index: React.FC<UseMemo_Index_Props> = ({
                                                     // navigation,
                                                     // route
                                                 }) => {


        const [tab, setTab] = useState('all');

        const [isDark, setIsDark] = useState(false);

        return (
            <div style={{
                marginTop: 20,
                marginBottom: 20,
            }}>

                <Button
                    onClick={() => setTab('all')}
                    as="a"
                    variant="success"
                    style={{
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                >
                    All
                </Button>
                {/*<button onClick={() => setTab('all')}>

                </button>*/}
               {/* <button onClick={() => setTab('active')}>

                </button>*/}

                <Button
                    onClick={() => setTab('active')}
                    as="a"
                    variant="success"
                    style={{
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                >
                    Active
                </Button>

                {/*<button onClick={() => setTab('completed')}>

                </button>*/}

                <Button
                    // onClick={() => setTab('all')}
                    as="a"
                    onClick={() => setTab('completed')}
                    variant="success"
                    style={{
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                >
                    Completed
                </Button>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={isDark}
                        // onChange={(event:React.ChangeEvent.HTMLAttributes) => (setIsDark(e.target.checked))}
                        onChange={(event:React.ChangeEvent<HTMLInputElement>/*:React.ChangeEvent.HTMLAttributes*/) => (setIsDark(event.target.checked))}
                    />
                    Dark mode
                </label>
                <hr />
                <ToDo_List
                    todos={todos}
                    tab={tab}
                    theme={isDark ? 'dark' : 'light'}
                />
            </div>
        );
};


export default UseMemo_Index;
