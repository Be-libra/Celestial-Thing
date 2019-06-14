import Information from './component/Information/Information';
import Solarsystemheader from './component/Solarsystemcomponent/Solarsystemheader';
import Moonheader from './component/Mooncomponent/Moonheader';
import Sunheader from './component/Suncomponent/Sunheader';
import Starheader from './component/Starcomponent/Starheader';
import Planetsheader from './component/Planetscomponent/Planetsheader';
import Galaxiesheader from './component/Galaxiescomponent/Galaxiesheader';
import Satellitesheader from './component/Satellitescomponent/Satellitesheader';
import Asteroidsheader from './component/Asteroidscomponent/Asteroidsheader';
import Universeheader from './component/Universecomponent/Universeheader';

 const Celestialobject = {
		space:Information,
		solarsystem:Solarsystemheader,
		moon:Moonheader,
		sun:Sunheader,
		star: Starheader,
		galaxies:Galaxiesheader,
		planets: Planetsheader,
		satellites:Satellitesheader,
		asteroids:Asteroidsheader,
		universe:Universeheader
};

export default Celestialobject;