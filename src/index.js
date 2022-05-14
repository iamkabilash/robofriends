import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card name={robots[0].name} id={robots[0].id} email={robots[0].email} />
    <Card name={robots[1].name} id={robots[1].id} email={robots[1].email} />
    <Card name={robots[2].name} id={robots[2].id} email={robots[2].email} />
    <Card name={robots[3].name} id={robots[3].id} email={robots[3].email} />
    <Card name={robots[4].name} id={robots[4].id} email={robots[4].email} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
