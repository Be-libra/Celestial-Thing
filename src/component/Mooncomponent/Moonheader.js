import React from 'react';
import Moons from './moons';

const Moonheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/three_moons-wallpaper-1600x900.jpeg?efZW2CqKaZmviFCu.jLjvnYvY00SRBqc" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">The Moon</h1>
			  
			</header>
			<Moons/>
			
			</div>
		);
}
export default Moonheader; 