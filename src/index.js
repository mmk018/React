import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import { directive } from '@babel/types';







/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */


const Header = () => {
  
  return <h2>Hello World!</h2>
}

const Field = () => {

  const holder = 'Enter Here';
  const styledField = {
    width: '500px'
  }
  return <input type="text"
    style={styledField}
   placeholder={holder}
   autoComplete=""
   className="first"
   htmlFor="" />
}

const Button = () => {
  const text = "Log in";
  const logged = true;
  const res = () => {
    return 'Log in, please'
  }
  const p = <p>Log in</p>
  return <button>{logged ? 'Enter' : text }</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Button/>

    </div>

  )
} 





ReactDOM.render(
  <App/>,document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
