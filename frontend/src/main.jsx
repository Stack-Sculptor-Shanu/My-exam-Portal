import React from "react";
import {createRoot} from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import store from "./components/Redux/Store/Store";
import ThemeProvider from "./components/ThemeContext";
createRoot(document.querySelector('#root')).render(<Provider store={store}>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
</Provider>)