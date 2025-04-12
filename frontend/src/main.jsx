import React from "react";
import {createRoot} from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import store from "./components/Redux/Store/Store";
createRoot(document.querySelector('#root')).render(<Provider store={store}>
    <App/>
</Provider>)