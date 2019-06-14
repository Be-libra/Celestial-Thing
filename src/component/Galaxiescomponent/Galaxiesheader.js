import React from 'react';
import Galaxies from './Galaxies';

const Galaxiesheader=() =>{

	return(

			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/b5/e2/50/shutterstock-576050593.jpg" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Galaxies</h1>
			  
			</header>
			<Galaxies/>
			
			</div>
		);
}

export default Galaxiesheader;