"use client"

import styled           from 'styled-components';
import PokedexMain      from './PokedexMain';
import PokedexSecondary from './PokedexSecondary';

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
	overflow-y: scroll;
	overflow-x: hidden;
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
