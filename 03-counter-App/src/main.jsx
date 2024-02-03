import React from 'react'
import ReactDom from 'react-dom/client';
import './styles.css'
import { CounterApp } from './CounterApp';
import FirstApp from './firstApp';
FirstApp

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 0 }></CounterApp>
    {/* <FirstApp></FirstApp> */}
  </React.StrictMode>
)