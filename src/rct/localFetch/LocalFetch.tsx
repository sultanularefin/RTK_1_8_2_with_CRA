


import React, {useState, useEffect} from "react";
import axios from "axios";
// import axios from "axios"
// import React from "react";
// import {My_Component2_Props} from "../jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Common_Mistake_03";

export interface LocalFetch_Props{


}


// 1st way - from json file inside src
// import userData from "../local-json/users.json";

// 3rd way - from js file inside src
// import { booksArray } from "../utils/books";

const Local_Fetch: React.FC<LocalFetch_Props> = ({
                                                     // navigation,
                                                     // route
                                                 }) => {



    // import "../App.scss";




    // export default function App() {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [albums, setAlbums] = useState([]);


    // unable to access public/test_data/data.json at june 19, 2022




    return (
        <div className="App">
            <h1>Fetched from local</h1>
            <div className="title-text"><strong>users</strong>(<i>JSON data from json file inside src</i>)</div>
            {users &&
                users?.map(({ name, id }) => (
                    <div key={id} className="list-row">
                        <strong>{name}</strong>
                    </div>
                ))}
            <hr />
            <div className="title-text"><strong>books</strong> (<i>JSON data from js file inside src</i>)</div>
            {books &&
                books?.map(({ title, id }) => (
                    <div key={id} className="list-row">
                        <strong>{title}</strong>
                    </div>
                ))}
            <hr />
            <div className="title-text"><strong>albums</strong> (<i>JSON file using react API call(fetch, axios)</i>)</div>
            {albums &&
                albums?.map(({ title, userId }) => (
                    <div key={userId} className="list-row">
                        <strong>{title}</strong>
                    </div>
                ))}
        </div>
    );
};


export default Local_Fetch;

