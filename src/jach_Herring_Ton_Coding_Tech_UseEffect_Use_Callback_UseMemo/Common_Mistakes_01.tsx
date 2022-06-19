// import React from "react";

import React, {
    useRef,
    useState
} from "react";

import {Coutries_With_Phone_Flag, test_Numbers, Theme} from "./Coutries_With_Phone_Flag";


// const numbers = require('./numbers.json');
export interface Common_Mistakes_01_Props{


}

// test_Numbers



const My_Component: React.FC<Common_Mistakes_01_Props> = ({
                                                                          // navigation,
                                                                          // route
                                                                      }) => {

    const numbers =useState([]);



    console.log("___Numbers___:",JSON.stringify(numbers[0]));


    fetch("./numbers.json").
    then((resp)=> resp.json()).
    then(
        (data)=>(
            numbers[0]=data)
    );

    // The JSON.stringify() method converts JavaScript objects into strings.
    // When sending data to a web server the data has to be a string.


    return(
        <div>
            {/*<p>Hello</p>*/}

            <div>Numbers: {JSON.stringify(numbers[0])}</div>

        </div>
    );

};

const Common_Mistakes_01=()=>{

return(
    <div>
        <My_Component/>
    </div>
);

};



export default Common_Mistakes_01;
