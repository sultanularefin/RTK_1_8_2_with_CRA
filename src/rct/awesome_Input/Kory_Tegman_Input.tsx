import React, {useState} from "react";

// https://codepen.io/koryteg/pen/GRRdqyv
// https://tailwindcss.com/docs/guides/create-react-app


import styles from '../../css/Kory_Tegman_Input.module.css';

export interface Kory_Tegman_Input_Props{

}

export interface StdInput_Props{
    name: string,
    label: string,
    type: string,
    placeholder: string,
    value: string,
}
/*name="user[password_confirmation]"
label="Password Confirmation"
type="password"
placeholder="asdf@#$234"
value=""*/

const StdInput: React.FC<StdInput_Props> = ({
                                                name,
                                                label,
                                                type,
                                                placeholder,
                                                value,
                                            })=>{
// const StdInput = (props:any) => {
    const blurStyles = {
        label: {},
        input: {}
    };
    const focusStyles = {
        label: {
            top: "-11px",
            color: "#4299e1",
            fontSize: "14px",
            background: "#fff" },
        input: { borderColor: "#4299e1" }
    };

    const [styles_State, set_Styles_State] = useState(blurStyles);
    // const [value_State, set_Value_State] = useState(props.value || "");
    const [value_State, set_Value_State] = useState(value || "");

    const onFocus = () => {
        set_Styles_State(focusStyles);
    };

    const onBlur = () => {
        if (value.length  === 0) {
            set_Styles_State(blurStyles);
        }
    };

    return (<>
            <div className="field relative block w-full my-4">
                <label htmlFor={name} style={styles.label} className="absolute text-gray-500">{label}</label>
                <input id={name}
                       style={styles.input}
                       type={type}
                       name={name}
                       placeholder={placeholder}
                       className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white"
                       onFocus={()=> { onFocus(); }}
                       onBlur={()=> { onBlur(); }}
                       onChange={(event:any) => set_Value_State(event.target.value)}
                       value={value}
                />
            </div>
        </>
    );
};

const Kory_Tegman_Input: React.FC<Kory_Tegman_Input_Props> = ({})=>{
    // const [incrementAmount, setIncrementAmount] = useState('2');


    // const { useState } = React;

    // const App = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <StdInput
                name="user[email]"
                label="Email"
                type="email"
                placeholder="peter@megacorp.com"
                value=""
            />
            <StdInput
                name="user[password]"
                label="Password"
                type="password"
                placeholder="asdf@#$234"
                value=""
            />
            <StdInput
                name="user[password_confirmation]"
                label="Password Confirmation"
                type="password"
                placeholder="asdf@#$234"
                value=""
            />
            <button className="w-full bg-blue-700 p-2 rounded text-white hover:bg-blue-600 cursor-pointer">Sign up</button>
        </div>
    );
};


export default Kory_Tegman_Input;





// ReactDOM.render(<App />, document.getElementById('app'))
