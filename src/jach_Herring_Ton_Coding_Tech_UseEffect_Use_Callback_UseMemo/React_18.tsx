import React, {
    useCallback,
    useEffect, useMemo,
    useRef,
    useState
} from "react";

// import {Coutries_With_Phone_Flag, test_Numbers, Theme} from "./Coutries_With_Phone_Flag";
import "./../styles.css";

// const numbers = require('./numbers.json');
export interface My_Component2_Props{


}
//https://codesandbox.io/s/priceless-estrela-c2chs0?file=/src/App.js:46-68

// https://c2chs0.csb.app/
// codesandbox.io/s/priceless-estrela-c2chs0?file=/src/App.js

const React_18: React.FC<My_Component2_Props> = ({})=>{



    const BadStopwatch = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("BadStopwatch useEffect");
            setInterval(() => {
                setCount((some_Value) => some_Value + 0.1);
            }, 100);
        }, []);

        return <div>Bad Stopwatch: {count.toFixed(1)}</div>;
    };



    const GoodStopwatch = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCount((some_Value) => some_Value + 0.1);
            }, 100);
            return () => clearInterval(interval);
        }, []);

        return <div>Good Stopwatch: {count.toFixed(1)}</div>;
    };



    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
            }}
        >
            <BadStopwatch />
            <GoodStopwatch />
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
