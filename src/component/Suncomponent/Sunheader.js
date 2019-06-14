import React from 'react';
import Sun from './Sun';

const Sunheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://wp-assets.futurism.com/2013/10/sun-07.jpg" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">The Sun</h1>
			  
			</header>
			<Sun/>
			
			</div>
		);
}
export default Sunheader; 