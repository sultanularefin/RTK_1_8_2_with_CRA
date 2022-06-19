// import React from "react";

import React, {
    useRef,
    useState
} from "react";

import {Coutries_With_Phone_Flag, test_Numbers, Theme} from "./Coutries_With_Phone_Flag";


// const numbers = require('./numbers.json');
export interface My_Component2_Props{


}

// test_Numbers
// ## convention ---rules are for your own good.
// 1. always use the setter when setting the state.
// you should only change state, in 2 cases:

// 1. when your application is loaded.
// inside useEffect and useCallBack Hooks.

// 2. useEffect, in FC when a component loaded or unloaded (timer out, app state change, back button press) || or some other state changed and u wnat to change another state.

// 3. useCallback: user interaction such as click.


const My_Component2: React.FC<My_Component2_Props> = ({
                                                              // navigation,
                                                              // route
                                                          }) => {

    const numbers =useState<number[]>([]);



    console.log("___Numbers___:",JSON.stringify(numbers[0]));


    fetch("./numbers.json").
    then((resp)=> resp.json()).
    then(
        (data)=>{

            console.log("Result: ",JSON.stringify(data));

            numbers[0]=data;

            console.log("--done--");
        }

    );

    // The JSON.stringify() method converts JavaScript objects into strings.
    // When sending data to a web server the data has to be a string.

    numbers[0]=[4,5,6];

    return(
        <div>
            {/*<p>Hello</p>*/}

            <div>Numbers: {JSON.stringify(numbers[0])}</div>

        </div>
    );

};

const Common_Mistakes_02=()=>{

    console.log("inside: of ","Common_Mistakes_02");
    return(
        <div>
            <My_Component2/>
        </div>
    );

};



export default Common_Mistakes_02;
