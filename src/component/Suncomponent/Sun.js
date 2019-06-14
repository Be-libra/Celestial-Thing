import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Sun =() =>{

	return(
			<div >
			<article className="athelas">
				  <div className="vh-100 dt w-100 tc  bg-dark-gray black cover " style={{background:'url(https://cdn.pixabay.com/photo/2012/01/09/09/10/sun-11582_960_720.jpg) no-repeat center'}}>
				    <div className="dtc  v-mid">
				      <h1 className="f1 f-headline-l fw1 i white-60">The Sun</h1>
				    </div>
				  </div>
				  <div className="center measure-wide f5 pv5 lh-copy ph2">
				    <h1 className="f1 lh-title">Ô, Sunlight! The most precious gold to be found on Earth...</h1>
				    
				    <p>
				      The Sun is the star at the center of the Solar System. It is a nearly perfect 
				      sphere of hot plasma, with internal convective motion that generates a magnetic
				       field via a dynamo process. It is by far the most important source of energy for 
				       life on Earth.</p>
				    <p>
				    	The Sun—the heart of our solar system—is a yellow dwarf star, a
				    	 hot ball of glowing gases.
				    </p>   
				    
				    <p>
				      Its gravity holds the solar system together, keeping everything from the
				       biggest planets to the smallest particles of debris in its orbit. 
				       Electric currents in the Sun generate a magnetic field that is carried out 
				       through the solar system by the solar wind—a stream of electrically charged 
				       gas blowing outward from the Sun in all directions.
				    </p>
				    <p>
				    	The connection and interactions between the Sun and Earth drive the seasons,
				    	 ocean currents, weather, climate, radiation belts and aurorae. Though it is
				    	  special to us, there are billions of stars like our Sun scattered across the 
				    	  Milky Way galaxy.				   

				     </p>

				     <h1 className="f1 lh-title">
				     	Size And Distances
				     </h1>
				     <p>
				     	With a radius of 432,168.6 miles (695,508 kilometers), our Sun is not 
				     	an especially large star—many are several times bigger—but it is still 
				     	far more massive than our home planet: 332,946 Earths match the mass of the Sun.
				     	 The Sun’s volume would need 1.3 million Earths to fill it.
				     </p>
				    
				    <img src='https://solarsystem.nasa.gov/system/internal_resources/details/original/343_Sun-Earth_br.jpg' alt='palnets in solarsystem' />
				    <h1 className='f1 lh-title'>Formation</h1>

				    <p>
				    	The Sun and the rest of the solar system formed from a giant, rotating cloud
				    	 of gas and dust called a solar nebula about 4.5 billion years ago. As the 
				    	 nebula collapsed because of its overwhelming gravity, it spun faster and
				    	  flattened into a disk. Most of the material was pulled toward the center 
				    	  to form our Sun, which accounts for 99.8% of the mass of the entire solar system.
				    </p>
				    <p>
				    	Like all stars, the Sun will someday run out of energy. When the Sun starts to die,
				    	 it will swell so big that it will engulf Mercury and Venus and maybe even Earth.
				    	  Scientists predict the Sun is a little less than halfway through its lifetime
				    	   and will last another 6.5 billion years before it shrinks down to be a white 
				    	   dwarf.
				    </p>
				    <h1 className='f2 lh-title'>Structure</h1>
				    <p>
				    	The Sun, like others stars, is a ball of gas. In terms of the number of atoms, 
				    	it is made of 91.0% hydrogen and 8.9% helium. By mass, the Sun is about 70.6% 
				    	hydrogen and 27.4% helium.
				    </p>
				    </div>


				    <CarouselProvider className='tc'
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={4}
      		>
        <Slider>
          <Slide index={0}><img src='http://solarviews.com/raw/vss/VSS00031.jpg' alt='sun def' />
          </Slide>
          <Slide index={1}><img src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/655928main_solar-anatomy-MOS-orig_full.jpg' alt='anatomy of sun' /> </Slide>
          <Slide index={2}><div>
          		<img src='https://solarsystem.nasa.gov/system/feature_items/images/131_PIA18906_800w.jpg' alt='x-ray sun' />
          		</div>
          </Slide>

          <Slide index={3}><div>
          		<img src='https://solarsystem.nasa.gov/system/feature_items/images/133_PIA22055_800w.jpg' alt='x-ray sun' />
          		</div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
		</article>
		 
		 	
		</div>
		);
}

export default Sun;