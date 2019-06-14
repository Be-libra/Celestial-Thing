import React from 'react';
import Star from './Star';

const Starheader =()=> {

	return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://cdn-images-1.medium.com/max/1200/1*n8ODb1OAe6ygCtABI18e7Q.png" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Stars</h1>
			  
			</header>
			<Star/>
			
			</div>
		);
}


export default Starheader;