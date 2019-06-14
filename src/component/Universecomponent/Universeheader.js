import React from 'react';
import Universe from './Universe';

const Universeheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="http://gameofglam.com/wp-content/uploads/2017/06/Spiral-1000x600.jpg" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Universe</h1>
			  
			</header>
			<Universe/>
			
			</div>
		);
}

export default Universeheader;