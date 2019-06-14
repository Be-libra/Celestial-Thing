import React from 'react';
import Satellites from './Satellites';

const Satellitesheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1092541985%2F960x0.jpg%3Ffit%3Dscale" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Satellites</h1>
			</header>
			<Satellites/>
			
			</div>
		);
}

export default Satellitesheader;