import React ,{Component} from 'react';
import Infobody from './Infobody.js';

class Information extends Component{
	render(){
		return(
			<div>
			<header className="bg-white black-80 tc pv4 avenir">
			<div className="tc pa4">
			  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5qlP69YDBhOL-DV0cDt1b7TUe2D5RLIiCzNkjvcDldQGkVhR" className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar"/>
			</div>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Space</h1>
			  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Explore Space</h2>
			</header>
			<Infobody/>
			
			</div>
			  
			);
	}
}
export default Information;