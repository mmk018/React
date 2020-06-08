import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';


/* class WhoAmI extends Component {
  

    state = {
      years: 26
      
      }

    nextYear = () => {
      this.setState(state => ({
        years : ++state.years
      }))

    }  */

    /* nextYear() {
      console.log(1);
      
      this.setState(state => ({
        years : ++state.years
      }))
      
    } */
  
  /* render() {
    const {name,surname,link} = this.props;
    const {years} = this.state;
    return (
    
      <>

        <button onClick={this.nextYear}>++</button>
        <h1>Mz name is {name} , surname {surname}, is years ={years} - </h1>
        <a href={link}>My profile</a>
  
      </>
    )
  }
}

 */


/* const All = () => {
  return(
    <>
    <WhoAmI name="John" surname= "Smith" link="facebook.com" />
    <WhoAmI name="Johnius" surname= "Smith" link="facebook.com" />
    <WhoAmI name="John" surname= "Shmmmith" link="facebook.com" />
    
    
    </>

  )
} */

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);







