import   React from 'react';

const Galaxiesclassification= () =>{

	return(
			<div className='view'>
			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow " >
				  <div className="dtc v-mid">
				    <img src="data:image/jpeg;base64,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" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    
				    <h1 className="lh-title Blue">
				      Elliptical Galaxy
				    </h1>
				  </div>
			</div>

			
			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow " >
				  <div className="dtc v-mid">
				    <img src="data:image/jpeg;base64,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" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    
				    <h1 className="lh-title Blue">
				     Spiral Galaxy
				    </h1>
				  </div>
			</div>


			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow " >
				  <div className="dtc v-mid">
				    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHs20N_qyfD-lPAGQDyJX26Veap9Kye9rvjp2BIeqoDBwrhmP" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    
				    <h1 className="lh-title Blue">
				      Irregular Galaxy
				    </h1>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow " >
				  <div className="dtc v-mid">
				    <img src="data:image/jpeg;base64,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" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    
				    <h1 className="lh-title Blue">
				     Dwarf Galaxy
				    </h1>
				  </div>
			</div>
			</div>	
		);
}


export default Galaxiesclassification;