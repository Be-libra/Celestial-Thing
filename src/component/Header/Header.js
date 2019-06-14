import React from 'react';
import Logo from '../Logo/Logo';
import '../Body/Description.css';

const Header= ()=>
{
  return(
  		<div className='flex pa3 shadow grow bg-white' style={{background:'#6699FF'}}>
  			<Logo />
  			<div className='flex flex-column'>
	  			<h1 className='calisto'>Cosmos</h1>
	  			<h3 className='avenir'>Its All Start With A small Particle</h3>
  			</div>

  		</div>
  	);
}

export default Header;
