import React,{Component} from 'react';
import Mooncover from './mooncover';




class Moons extends Component{
	render(){
		return(
			<div >
			<article className="athelas">
				  <div className="vh-100 dt w-100 tc  bg-dark-gray black cover " style={{background:'url(https://cdn.pixabay.com/photo/2014/08/11/11/50/full-moon-415501__340.jpg) no-repeat center'}}>
				    <div className="dtc  v-mid">
				      <h1 className="f1 f-headline-l fw1 i white-60">Moons</h1>
				    </div>
				  </div>
				  <div className="center measure-wide f5 pv5 lh-copy ph2">
				    <h1 className="f1 lh-title">the Moon puts on an elegant show, 
				    different everytime in space,color and nuance....</h1>
				    <h1 className="f1 lh-title">
				      What Is A Moon ?
				    </h1>
				    <p>
				      Planets and asteroids in our solar system orbit the Sun. 
				      Moons — also known as natural satellites — orbit planets and asteroids. 
				      Moons come in many shapes, sizes and types. Most are airless, but a few have 
				      atmospheres and even hidden oceans. There are dozens of moons in our solar system —
				       even a few asteroids have small companion moons.
				    </p>
				    <Mooncover />
				    <p>
				      Moons — also called natural satellites — come in many shapes, sizes and types. 
				      They are generally solid bodies, and few have atmospheres. Most of the planetary 
				      moons probably formed from the discs of gas and dust circulating around planets in 
				      the early solar system.
				    </p>
				    <p>
				    	There are hundreds of moons in our solar system — even a few asteroids have been found to have small companion moons. 
				    	Moons that begin with a letter and a year are considered provisional moons. 
				    	They will be given a proper name when their discoveries are confirmed by additional observations.
				    </p>
				    <p>
				    	Of the terrestrial (rocky) planets of the inner solar system, neither Mercury nor 
				    	Venus have any moons at all, Earth has one and Mars has its two small moons. 
				    	In the outer solar system, the gas giants Jupiter and Saturn and the ice giants Uranus and
				    	 Neptune have doznes of moons. As these planets grew in the early solar system, they were able
				    	  to capture smaller objects with their large gravitational fields.
				    </p>
				  </div>
		</article>
			
		</div>

			);
	}
}

export default Moons;