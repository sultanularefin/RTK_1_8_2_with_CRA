import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// import { store } from './app/store';
// import App from './App';

import reportWebVitals from './reportWebVitals';
import './index.css';

// import May_28 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/May_28";
import Class_In_FC from "./class_In_FC_Component/Class_In_FC";
import Linked_List_Testing from "./link_List_Testing/Link_LIst_Testing";
import White_Board_Link_LIst from "./white_Board/White_Board_Link_LIst";
import Common_Mistakes_01 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Common_Mistakes_01";
import Common_Mistakes_02 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Common_Mistakes_02";
import Common_Mistake_03 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Common_Mistake_03";
import Local_Fetch from "./localFetch/LocalFetch";
import Common_Mistake_04 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Common_Mistake_4";
import Jack_Herrington_RCT_18 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/Jack_Herrington_RCT_18";
import MD_Testing_Wth_Pkg from "./markdown_Testing/MD_Testing_Wth_Pkg";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        {/*<May_28/>*/}
        {/*   <Provider store={store}>
            <App />
        </Provider>*/}
        {/*<Class_In_FC/>*/}

        {/*<Linked_List_Testing/>*/}

        {/*<White_Board_Link_LIst/>*/}

        {/*<Common_Mistakes_01/>*/}

        {/*<Common_Mistakes_02/>*/}


        {/*<Common_Mistake_03/>*/}

        {/*<Common_Mistake_04/>*/}

         <Jack_Herrington_RCT_18/>


       {/* <MD_Testing_Wth_Pkg/>*/}


        {/*<Local_Fetch/>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
