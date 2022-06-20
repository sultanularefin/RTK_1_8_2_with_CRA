import React, {
    useCallback,
    useEffect, useMemo,
    useRef,
    useState
} from "react";

import {Coutries_With_Phone_Flag, test_Numbers, Theme} from "./Coutries_With_Phone_Flag";


// const numbers = require('./numbers.json');
export interface My_Component2_Props{


}

// TEST_NUMBERS
// ## CONVENTION ---RULES ARE FOR YOUR OWN GOOD.
// 1. ALWAYS USE THE SETTER WHEN SETTING THE STATE.
// YOU SHOULD ONLY CHANGE STATE, IN 2 CASES:

// 1. WHEN YOUR APPLICATION IS LOADED.
// INSIDE USEEFFECT AND USECALLBACK HOOKS.

// 2. USEEFFECT, IN FC WHEN A COMPONENT LOADED OR UNLOADED (TIMER OUT, APP STATE CHANGE, BACK BUTTON PRESS) || OR SOME OTHER STATE CHANGED AND U WNAT TO CHANGE ANOTHER STATE.

// 3. USECALLBACK: USER INTERACTION SUCH AS CLICK.

// 4. To run eseEffect only once use an empty array.
// 5. Don't depend on data you set


const numbers =[0,1,2,3,4,5];


const React_18: React.FC<My_Component2_Props> = ({})=>{
// navigation,
// route

    return(
        <div>
            <p>hello</p>

        </div>
    );

};

const Jack_Herrington= ()=>{

    console.log("inside: of ","Common_Mistake_04");
    return(
        <div>
            <React_18/>
        </div>
    );

};



export default Jack_Herrington;
