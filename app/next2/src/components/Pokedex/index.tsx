import PokedexMain from './PokedexMain';
import PokedexSecondary from './PokedexSecondary';

import Div from '@/components/Div';




export default async function Pokedex () {

	return (
		<Div >
			<PokedexMain/>
			<PokedexSecondary/>
		</Div>
	)
}
