import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from './CounterApp';
import {App} from "./App.tsx";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
        <App title="Hola" name="Reac App"></App>
    </React.StrictMode>
);