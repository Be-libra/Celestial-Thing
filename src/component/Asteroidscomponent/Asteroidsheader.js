import React from 'react';
import Asteroids from './Asteroids';

const Asteroidsheader =() =>{

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://www.scienceabc.com/wp-content/uploads/2015/09/Asteroid.jpg" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Asteroids, Meteors And Comets</h1>
			  
			</header>
			<Asteroids/>
			
			</div>
		);
}

export default Asteroidsheader;