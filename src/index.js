import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 


// Here what React Does, I'm rendering React components, written in their own files

ReactDOM.render(  <Card />,  document.getElementById('root')   );










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
