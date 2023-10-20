"use client"

import PokedexMain from './PokedexMain';
import PokedexSecondary from './PokedexSecondary';
import styled from 'styled-components';




const PokedexWrapper = styled.div`
display: flex;
flex-direction: row;
max-height: 100vh;
align-items: center;
-ms-overflow-style: none;

scrollbar-width: none;
@media (max-width: 868px) {
	flex-direction: column;
	position: asbolute;
	overflow: scroll;
padding-right: 11px;
padding-top : 20px;
}
`;

export default function Pokedex () {

	return (
		<div style={{display:"flex", flexDirection:"column"}}>
			<PokedexWrapper>
				<PokedexMain/>
				<PokedexSecondary/>
			</PokedexWrapper>
		</div>
	)
}
