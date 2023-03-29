import React, {
    useCallback,
    useEffect, useMemo,
    useRef,
    useState
} from "react";

// import {Coutries_With_Phone_Flag, test_Numbers, Theme} from "./Coutries_With_Phone_Flag";
import "../../styles.css";

// const numbers = require('./numbers.json');
export interface React_18_Props{


}
//https://codesandbox.io/s/priceless-estrela-c2chs0?file=/src/App.js:46-68

// https://c2chs0.csb.app/
// codesandbox.io/s/priceless-estrela-c2chs0?file=/src/App.js

const React_18: React.FC<React_18_Props> = ({})=>{



    const BadStopwatch = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("BadStopwatch useEffect");

            setInterval(() => {
                setCount((some_Value:number) => some_Value + 0.1);
            },
                100);
        }, []);

        return <div>Bad Stopwatch: {count.toFixed(1)}</div>;
    };


    const BadStopwatch_V2 = () => {
        const [count_V2, setCount_V2] = useState<number>(0);

        useEffect(() => {
            console.log("BadStopwatch useEffect");

            setInterval(() => {
                    // setCount_V2((some_Value:number) => some_Value + 0.1);
                    // setCount_V2((some_Value:number) => some_Value + 0.1);
                    setCount_V2(count_V2 + 0.1);
                },
                100);
        }, [
            count_V2
        ]);

        return <div>Bad Stopwatch V2: {count_V2.toFixed(1)}</div>;
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
            <BadStopwatch_V2/>
            <GoodStopwatch />
        </div>
    );


};

const Jack_Herrington_RCT_18= ()=>{

    console.log("inside: of ","Common_Mistake_04");
    return(
        <div>
            <React_18/>
        </div>
    );

};



export default Jack_Herrington_RCT_18;
