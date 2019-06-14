import React from 'react';
import ComponentCover from './ComponentCover';
import Categories from './Categories';


const Datacomponent= ({onCategoryclick}) =>{

	return(
		<div>
		<ComponentCover/>
		<Categories onCategoryclick={onCategoryclick}/>
		</div>
		);
}

export default Datacomponent;