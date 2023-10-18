import styled from 'styled-components'
import { GLOBALS } from '@/pages/_app';

// =============================================================================
// ---------------------------------- GLOBALS ----------------------------------
// =============================================================================

let CONSTANT = GLOBALS.CONSTANT
let UNIT     = GLOBALS.UNIT

// =============================================================================
// ----------------------------------- UTILS -----------------------------------
// =============================================================================

const getColor = (props:any) => {

	if (props.dark){
		switch (true) {
			case props.red    : return '#3e2137';
			case props.blue   : return '#34859d';
			case props.yellow : return '#647d34';
			case props.green  : return 'green';
			default: return 'gray';
		}
	}
	else if (props.light){
		switch (true) {
			case props.red    : return '#9d303b';
			case props.blue   : return '#7ec4c1';
			case props.yellow : return '';
			case props.green  : return 'green';
			default: return 'gray';
		}
	}
	else{
		switch (true) {
			case props.red    : return '#9d303b';
			case props.blue   : return '#7ec4c1';
			case props.yellow : return '#f5edba';
			case props.green  : return 'green';
			case props.brown  : return '#1f0e1c';
			default: return 'gray';
		}
	}
};




const getHeight = (props:any) => {
	if (!props.h) props.h = 1;
	return `${props.h * CONSTANT}${UNIT}`;
}

const getWidth= (props:any) => {
	if (!props.w) props.w = 1;
	return `${props.w * CONSTANT}${UNIT}`;
}

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================

const Pixel = styled.div<{
	dark?   : boolean|string,
	blue ?   : boolean|string,
	brown?   : boolean|string,
	yellow? : boolean|string,
	red?    : boolean|string,
	h?      : number,
	w?      : number
}>
`
position: relative;
height           : ${props => getHeight(props)};
width            : ${props => getWidth (props)};
max-height       : '100vh';
background-color : ${props => getColor (props)};
`


export default Pixel
