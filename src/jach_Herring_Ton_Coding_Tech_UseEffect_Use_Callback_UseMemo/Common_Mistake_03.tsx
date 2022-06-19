import React, {
    useEffect,
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


const numbers =[0,1,2,3,4,5];


const My_Component3: React.FC<My_Component2_Props> = ({
                                                          // navigation,
                                                          // route
                                                      }) => {

    // const numbers =useState<number[]>([]);

    const [numbers_State, set_Numbers_State] =useState<number[]>([]);

    // console.log("___Numbers___:",JSON.stringify(numbers[0]));


    const postData= async (url = '', data = {}) =>{
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET',//'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    };



    useEffect(()=>{


        const main= async ()=>{


            ///home/arefin/Programs/byvl/rtk1_8_2_cra/public/test_data/data.json
            console.log("inside main");
            try {

                const request_URL="http://localhost:3000/sos";
                //     const request_URL="/test_data/numbers.json";

                // this also worked--01
                const response = await fetch(

                    request_URL,
                    {
                        // method: 'POST',
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        /*
                        body: JSON.stringify({
                            // user_id: user_ID_For_PHone_Verify,//phone_With_CountryCode_State.userID,
                        }),
                        */
                    },
                );






                const data = await response.json();
                console.log("data: ",data);

                // console.log("Result: ",JSON.stringify(data));

                if ((response.status === 200)||(response.status === 201)) {


                    set_Numbers_State(data);

                    console.log("--done--");

                } else {
                    console.log("__data__ sent_phone_verify_to_Wexprez Response_ !==200: ",data);

                    // return thunkAPI.rejectWithValue(data);
                }

                // tHIS WORKED ON JUNE_19 2022 ---02
                /*
                              await fetch(request_URL).
                               then((response2) => response2.json()).
                               then((data) =>{
                                   console.log(data);
                               });
                              */



                // console.log("response: ",response);



                // 999

                // tHIS WORKED ON JUNE_19 2022 ---03
                /*
               await postData(request_URL, {  }).
                then((data) => {
                        console.log(data); // JSON data parsed by `data.json()` call
                    }
                );

               */






            } catch (error: any) {
                console.log('Error___ sent_phone_verify_to_Wexprez Response_ !==200', error.response.data);

            }

        };


        main();




    },[numbers_State]);

    // The JSON.stringify() method converts JavaScript objects into strings.
    // When sending data to a web server the data has to be a string.

    // numbers[0]=[4,5,6];

    return(
        <div>
            {/*<p>Hello</p>*/}

            <div>Numbers: {JSON.stringify(numbers_State)}</div>

        </div>
    );

};

const Common_Mistake_03=()=>{

    console.log("inside: of ","Common_Mistake_03");
    return(
        <div>
            <My_Component3/>
        </div>
    );

};



export default Common_Mistake_03;
