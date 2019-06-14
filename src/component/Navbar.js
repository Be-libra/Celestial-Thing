import React,{Component} from 'react';




class Navbar extends Component{
   
	render(){
		
		if(this.props.Route==='home' || this.props.Route==='' ){
		return(
			
			<nav  style={{display: 'flex', justifyContent: 'flex-end',background:'white'}}>
				<p onClick={()=>this.props.onRoutechange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
				<p onClick={()=>this.props.onRoutechange('Components')} className='f3 link dim black underline pa3 pointer'>Components</p>
				</nav>
			
			);}
		
		else{
			return(
			<nav style={{display: 'flex', justifyContent: 'flex-end',background:'white'}}>
				<p onClick={()=>this.props.onRoutechange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
				
			</nav>
			);

		}
	}
}
export default Navbar;