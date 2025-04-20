import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));              //React creates it's own virtual DOM and root of that is div with id root of index.html file
root.render(                                                                    //then all the components are rendered there
  <React.StrictMode>
    <App />                                                                    {/* here App named component is getting rendered */}
  </React.StrictMode>
);

