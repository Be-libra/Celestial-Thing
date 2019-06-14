import React,{Component} from 'react';
import Album from './Album';




class Infobody extends Component{
	render(){
		return(
			<div >
			<article className="athelas">
				  <div className="vh-100 dt w-100 tc  bg-dark-gray black cover " style={{background:'url(https://www.rd.com/wp-content/uploads/2017/10/00_Space_The-Surprising-Way-Your-Genes-Can-Change-in-Space-According-to-NASA_562691425-Vadim-Sadovski-760x506.jpg) no-repeat center'}}>
				    <div className="dtc  v-mid">
				      <h1 className="f1 f-headline-l fw1 i white-60">The Space</h1>
				    </div>
				  </div>
				  <div className="center measure-wide f5 pv5 lh-copy ph2">
				    <h1 className="f1 lh-title">Somewhere.. Something Incredible is Waiting..</h1>
				    <p>
				      space, is the expanse that exists beyond the Earth and between celestial bodies.
				    </p>
				    <p>
				      Outer space is not completely empty—it is a hard vacuum containing a low density of particles,
				       predominantly a plasma of hydrogen and helium, as well as electromagnetic radiation,
				        magnetic fields, neutrinos, dust, and cosmic rays. The baseline temperature of outer space, 
				        as set by the background radiation from the Big Bang, is 2.7 kelvins (−270.45 °C; −454.81 °F).
				         The plasma between galaxies accounts for about half of the baryonic (ordinary) matter in the 
				         universe; it has a number density of less than one hydrogen atom per cubic metre and a 
				         temperature of millions of kelvins; local concentrations of this plasma have condensed into
				          stars and galaxies. Studies indicate that 90% of the mass in most galaxies is in an unknown form,
				          alled dark matter, which interacts with other matter through gravitational but not electromagnetic 
				          forces. Observations suggest that the majority of the mass-energy in the observable universe is 
				          dark energy, a type of vacuum energy that is poorly understood. Intergalactic space takes up most
				           of the volume of the universe, but even galaxies and star systems consist almost entirely of empty
				            space.
				    </p>
				    <img src='https://www.gannett-cdn.com/-mm-/d054ba5145d62b493f55e3e1162e3662d4519619/c=0-263-3226-2086/local/-/media/2017/08/02/USATODAY/USATODAY/636372640676941380-GettyImages-475559190.jpg?width=3200&height=1680&fit=crop' alt='beyond earth'/>

				    <p>
				      Outer space does not begin at a definite altitude above the Earth's surface. However, 
				      the Kármán line, an altitude of 100 km (62 mi) above sea level, is conventionally used as
				       the start of outer space in space treaties and for aerospace records keeping.
				    </p>
				  </div>
		</article>
			<Album />
		</div>

			);
	}
}

export default Infobody;