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


const My_Component_4: React.FC<My_Component2_Props> = ({
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

                console.log("response.status: ",response.status);
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




    },[
        // numbers_State
    ]);

    //1.  IT IS SETTING NUMBERS_STATE, SO IT DEPENDS ON NUMBER.

    // 2. BUT GIVING DEPENDENCY ARRAY LIST EMPTY WILL ENSURE THAT IT ONLY RUNS ONLY ONCE.

    //3.  IF YOU WANT TO RUN AN EFFECT AND CLEAN IT UP ONLY ONCE (ON MOUNT AND UNMOUNT), YOU CAN PASS AN EMPTY ARRAY ([]) AS
    // A SECOND ARGUMENT. THIS TELLS REACT THAT YOUR EFFECT DOESN’T DEPEND ON ANY VALUES FROM PROPS OR STATE, SO IT NEVER NEEDS TO RE-RUN.
    // THIS ISN’T HANDLED AS A SPECIAL CASE — IT FOLLOWS DIRECTLY FROM HOW THE DEPENDENCIES ARRAY ALWAYS WORKS.

    // The JSON.stringify() method converts JavaScript objects into strings.
    // When sending data to a web server the data has to be a string.

    // numbers[0]=[4,5,6];


    const add_One=()=>{
        set_Numbers_State(
            [
                ...numbers_State,
                numbers_State.length]


        );
    };

    const add_One_V2= useCallback( () => {
            set_Numbers_State(
                [
                    ...numbers_State,
                    numbers_State.length]
            );
        },[]
    );// since the dependency is empty and initally numbers length was 0 thus we get 0.





    const add_One_V3= useCallback( () => {
            set_Numbers_State(
                [
                    ...numbers_State,
                    numbers_State.length]
            );
        },[numbers_State]
    );// this methods take into account the current state of numbers_State.




    const add_One_V4= useCallback( () => {

        // 1. HERE set_Numbers_State CAN SET A NEW VALUE AS PREVIOUSLY SHOWN.
        // 2. OR IT HAS GIVEN CURRENT VALUE (IE. CURRENT STATE) AND manipulates upon that state)
            set_Numbers_State((current_Numbers:number[])=>[
                    ...current_Numbers,
                    current_Numbers.length
                ]
            );
        },[/*numbers_State*/]
    );// no dependency array is now needed.



    const add_One_V5=  () => {

        // 1. HERE set_Numbers_State CAN SET A NEW VALUE AS PREVIOUSLY SHOWN.
        // 2. OR IT HAS GIVEN CURRENT VALUE (IE. CURRENT STATE) AND manipulates upon that state)
        set_Numbers_State((current_Numbers: number[]) => [
                ...current_Numbers,
                current_Numbers.length
            ]
        );
    };


    const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );



    // const sum_V0 =()=>{
    const sum_V0 = numbers_State.reduce((accumulator,current_Value)=>accumulator+current_Value,0);
    // }



    const sum_V1 = useMemo(()=>numbers_State.reduce((accumulator,current_Value)=>accumulator+current_Value,0),[]);



    const sum_V2 = useMemo(()=>numbers_State.reduce((accumulator,current_Value)=>accumulator+current_Value,0),
        [
            numbers_State
        ]);



    return(
        <div>
            {/*<p>Hello</p>*/}

            <div>Numbers: {JSON.stringify(numbers_State)}</div>

            <div>
                <button onClick={add_One} >Add One</button>
            </div>

            <div>
                <button onClick={add_One_V2} >Add One</button>
            </div>


            <div>
                <button onClick={add_One_V3} >Add One</button>
            </div>

            <div>
                <button onClick={add_One_V4} >Add One</button>
            </div>



            <div>
                <button onClick={add_One_V5} >Add One</button>
            </div>



            <div>
                <p> sum: {sum_V0}</p>
            </div>



            <div>
                <p> sum_V1: {sum_V1}</p>
            </div>



            <div>
                <p> sum_V2: {sum_V2}</p>
            </div>









        </div>
    );

};

const Common_Mistake_04=()=>{

    console.log("inside: of ","Common_Mistake_04");
    return(
        <div>
            <My_Component_4/>
        </div>
    );

};



export default Common_Mistake_04;
