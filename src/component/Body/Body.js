import React,{Component} from 'react';
import Cover from './Cover';
import Blackholecard from './Blackholecard';
import './Body.css';

class MainBody extends Component{
	render(){
		return(
				<div>
					<Cover/>
					<div className='bodygridview ma4 br3 center cover' style={{ background:'url(https://images.pexels.com/photos/1323321/nature-milky-way-galaxy-stars-1323321.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940)'}} >
						<img  src="https://thumbs-prod.si-cdn.com/tLzOBxOFyQmBSGZy5iUO-HJiHMw=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/2d/55/2d55f7d8-f2a2-4b13-8ff0-5e023840e029/28_11_2014_black_hole.jpg" className="w-70 pa2 ma3 grow" alt="night sky over water"/>
						<Blackholecard  />
					</div>
				</div>
			);
	}
}
export default MainBody;