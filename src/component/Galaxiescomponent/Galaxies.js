import React from 'react';
import Galaxiesclassification from './Galaxiesclassification';

const Galaxies =() =>{

	return(
			<div >
			<article className="athelas">
				  <div className="vh-100 dt w-100 tc  bg-dark-gray black cover " style={{background:'url(https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5708%252C4134%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1159%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252Ff595fd83478ace5bc5ff3b76c84850e9%252F206255799%252Fandromeda-galaxy-picture-id680804035%26client%3Da1acac3e1b3290917d92%26signature%3D1e1621698eb1bb62b9edca5efe2c4ebf5df1980a&client=amp-blogside-v2&signature=22f3d0ee51ff60520121896aee73b88b1b975ceb) no-repeat center'}}>
				    <div className="dtc  v-mid">
				      <h1 className="f1 f-headline-l fw1 i white-60"> Galaxies</h1>
				    </div>
				  </div>
				  <div className="center measure-wide f5 pv5 lh-copy ph2">
				    <h1 className="f1 lh-title"> And beyond our galaxy are other galaxies, in the universe 
				    all told at least a hundred billion, each containing a hundred billion stars. Do these 
				    figures mean anything to you?....</h1>
				    
				    <p>
				    	A galaxy is a gravitationally bound entity, typically consisting of dark matter, 
				    	gas, dust and stars. Galaxies populate the Universe, mainly residing in clusters 
				    	and groups. There are thought to be over 100 billion galaxies in the observable 
				    	Universe. The most well-known galaxy is our own Milky Way – and indeed, the term 
				    	galaxy comes from the Greek “gala” meaning “milk”.  
				    </p>
				    <p>
				    	Until the early 20th century, it was widely believed that the Milky Way was the 
				    	only such structure in the Universe. Around the middle of the 18th Century, German 
				    	ilosopher Immanual Kant proposed “island Universes” that were similar to the Milky 
				    	Way and that populated the Universe. Sir William and Caroline Herschel were the 
				    	first to systematically catalogue the night sky – they catalogued around 2500 
				    	objects, including “spiral nebulae” that appeared to have a similar structure 
				    	to the Milky Way. Later, using the largest telescope of its day, optical 
				    	astronomer Lord Rosse agreed with Kant’s view, based on observations he made of 
				    	M51 with his home-made 72 inch telescope.
				    </p> 

				    <p>
				    	In April 1920, two eminent scientists – Harlow Shapley and Heber D. Curtis held 
				    	a public debate about the size of the Milky way and the nature of “nebulae”. 
				    	Shapley believed that the Milky Way was vastly greater in size than previous 
				    	estimates, and that spiral nebulae were a part of it. On the other hand, Curtis 
				    	believed that spiral nebulae were in fact island Universes, that lay beyond the 
				    	Milky Way. There was no winner as such to this “debate” which was finally 
				    	settled in 1923, when, using the period-luminosity relationship of cepheid 
				    	variable stars, young Edwin Hubble was able to determine the distance to the 
				    	Andromeda “nebula” was around 750 kpc, and that it had a diameter larger than 
				    	that of the Milky Way. This proved that Andromeda was not some small “spiral 
				    	nebula” within the confines of the Milky Way, but an enormous stellar system in 
				    	its own right.
				    </p>

				    <h1 className='f1 lh-title'>
				    	Size And Mass 
				    </h1>  
				    
				    <p>
				      Most galaxies have a total mass between ~ 107 M⊙ and 1012 M⊙. They range in size 
				      from a few kiloparsecs, to over one hundred kiloparsecs in diameter. Our own Milky 
				      ay contains over 100 billion stars, including our Sun, and the stellar disk extends 
				      to about 50 kpc in diameter. The spherical stellar halo extends up to 100 kpc, and 
				      the dark matter halo may extend even beyond this.
				    </p>

				    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSAdxdOoGvVbbrOR-PpIZ82viaYhtiIbCXdVyH69umRMFwRuQ' alt='star life'/>
				    <h1 className='f1 lh-title'>
				    	Classification Of Galaxies
				    </h1>

				     <p>
				     	Galaxies are classified according to how they appear, or their optical morphology. 
				     	The first attempt at a classification scheme for “Nebulae” was by Sir William 
				     	Herschel, and his son, Sir John Herschel. However, the most common classification 
				     	scheme in use today is the Hubble classification scheme. Galaxies can be classified 
				     	into the following broad categories, although there are many sub-catagories within 
				     	each classification:
				     </p>
				    
				    <Galaxiesclassification/>

				    <h1 className='f1 lh-title'>
				    	Galaxy Formation And Evolution
				    </h1>
				    <p>
				    	The galaxies in the Universe are constantly changing – through secular evolution, 
				    	ergers and interactions. Galaxies in the early Universe that have not formed stars 
				    	yet are known as “proto-galaxies”, and these galaxies typically contain just dark
				    	 matter and gas. It has been postulated that some such proto-galaxies may still 
				    	 exist, and in fact that there might be a class of “dark galaxies” that do not 
				    	 have the right conditions to ever form stars – these galaxies are solely made 
				    	 of dark matter, and perhaps gas. The theory of galaxy formation is actively being 
				    	 investigated by astronomers and astrophysicists.
				    </p>
				   
				    </div>
				</article>
			</div>	
		);
}

export default Galaxies;