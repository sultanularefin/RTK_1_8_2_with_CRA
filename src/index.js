import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import May_28 from "./jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/May_28";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <May_28/>
 {/*   <Provider store={store}>
      <App />
    </Provider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
