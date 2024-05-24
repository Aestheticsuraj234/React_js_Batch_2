import React from 'react';
import reactDom from "react-dom/client";
import App from './App';


// const reactElement = React.createElement(
//   'div', 
//   null, 
//   React.createElement(
//     'h1', 
//     { className: '' }, 
//     'I Love JSX!'
//   ),
//   React.createElement(
//     'p', 
//     null, 
//     "It's so easy to use!"
//   )
// );

// const myElement = React.createElement("h1" , null , "I Love JSX!")

const root = reactDom.createRoot(document.getElementById('root'));

root.render(
  <div>
    <App/>
  </div>
);