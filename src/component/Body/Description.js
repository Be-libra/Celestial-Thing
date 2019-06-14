import React,{Component} from 'react';
import './Description.css'

class Description extends Component{
	render(){
		return(
			<div className='bt bb bw2 ma4 pa4 '>
				<div >
					<img className='w-10 pa3 fl ' src='http://discovermagazine.com/~/media/Images/Issues/2018/April/black-hole-1.jpg' alt='blackhole'/>
					<span><p className='calisto f4' >A black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently 
					compact mass can deform spacetime to form a black hole.</p>
					<p className='calisto f4'>	Black holes of stellar mass are expected to form when very massive stars collapse at the end of their life cycle. After a black hole has formed, it can continue to grow by absorbing mass from its surroundings.
					 By absorbing other stars and merging with other black holes, supermassive black holes of millions of solar masses (M☉) may form. There is general consensus that supermassive black holes exist in the centers of most galaxies.
					</p></span>
				</div>
				
					<div className='bg-white b--black pa3 br3 calisto shadow-5 grow ma3' style={{background:'#6699FF'}}>
						<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/260px-Black_hole_-_Messier_87_crop_max_res.jpg' alt='first look of black hole'/>
						<span><p className='f3 measure-wide'>
								The supermassive black hole at the core of supergiant elliptical galaxy Messier 87, with a mass ~7 billion times the Sun's, as depicted in the first image released by the Event Horizon Telescope (10 April 2019). Visible are the crescent-shaped emission ring and central shadow, which are gravitationally magnified views of the black hole's photon ring and the photon capture zone of its event horizon. The crescent shape arises from the black hole's rotation and relativistic beaming; the shadow is about 2.6 times the diameter of the event horizon.
							<a href='https://en.wikipedia.org/wiki/Black_hole'>Read more...</a>
							</p>
						</span>
					</div>
			</div>
			);
	}
}

export default Description;