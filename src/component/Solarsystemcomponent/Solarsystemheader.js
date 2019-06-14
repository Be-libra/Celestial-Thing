import React from 'react';
import Solarsystem from './Solarsystem';

const Solarsystemheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://www.brecorder.com/wp-content/uploads/2018/01/solar-system.jpg" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Solar System</h1>
			  
			</header>
			<Solarsystem/>
			
			</div>
		);
}
export default Solarsystemheader; 