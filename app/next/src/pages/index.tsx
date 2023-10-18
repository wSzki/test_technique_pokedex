
import {useEffect}         from 'react'
import {useRouter}         from 'next/router';
import {useTaskContext}    from '@/contexts/TaskContext'
import Frame               from '@/components/Frame'
import Popup               from '@/components/Popup'
import PopupSaveSuccess    from '@/components/PopupSaveSuccess'
import PopupNoSearchResult from '@/components/PopupNoSearchResult';
import Tasks               from '@/components/Tasks'
import styled              from 'styled-components'
import Pixel from '@/components/Pixel';
import { GLOBALS } from './_app';

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================


const Button = styled.a<{ $primary?: boolean; }>`
--accent-color: black;


&:hover {
	filter: brightness(0.85);
}

`
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

const Div = styled.div<{
	absolute?       :   boolean|string,
	column?         :   boolean|string,
	bottom?         :   boolean|string,
	top?            :   boolean|string,
	left?           :   boolean|string,
	right?          :   boolean|string,
	align_bottom?   :   boolean|string,
	fill?           :   boolean|string,
	center?         :   boolean|string,
	padding_right?  :   number,
	padding_top?    :   number,
	padding_left?   :   number,
	padding_bottom? :   number,
}>
`
display             :   flex;
flex-direction      :   ${props => props.column         ? "column"                             : "row"};
position            :   ${props => props.absolute       ? "absolute"                           : "relative"};
bottom              :   ${props => props.bottom         ? "0px"                                : ""};
top                 :   ${props => props.top            ? "0px"                                : ""};
left                :   ${props => props.left           ? "0px"                                : ""};
right               :   ${props => props.right          ? "0px"                                : ""};
padding-right       :   ${props => props.padding_right  ? (props.padding_right*GLOBALS.CONSTANT)+GLOBALS.UNIT  : ""};
padding-top         :   ${props => props.padding_top    ? (props.padding_top*GLOBALS.CONSTANT)+GLOBALS.UNIT    : ""};
padding-left        :   ${props => props.padding_left   ? (props.padding_left*GLOBALS.CONSTANT)+GLOBALS.UNIT   : ""};
padding-bottom      :   ${props => props.padding_bottom ? (props.padding_bottom*GLOBALS.CONSTANT)+GLOBALS.UNIT : ""};
align-items         :   ${props => props.align_bottom   ? "end"                                : ""};
width               :   ${props => props.fill           ? "100%"                               : ""};
height              :   ${props => props.fill           ? "100%"                               : ""};
justify-content     :   ${props => props.center         ? "center"                      : ""};
align-items         :   ${props => props.center         ? "middle"                      : ""};

`

function PokedexMainCorners ({children}:any) {

	function BottomLeft () {
		return (
			<Div absolute bottom left align_bottom>
				<Div column>
					<Pixel red dark h={2}/>
					<Pixel yellow/>
				</Div>
				<Pixel red dark h={4}/>
				<Pixel red dark h={2}/>
				<Pixel red dark h={1}/>
				<Pixel red dark h={1}/>
			</Div>
		)
	}

	function TopLeft() {
		return (
			<Div absolute top left>
				<Div column>
					<Pixel yellow/>
					<Pixel red dark/>
				</Div>
				<Pixel h={1}/>
				<Pixel red dark h={1}/>
			</Div>
		)
	}

	function TopRight ({children}:any) {
		return (
			<Div absolute top right>
				<Pixel/>
			</Div>
		)
	}

	function BottomRight ({children}:any) {
		return (
			<Div absolute bottom right>
				<Div column>
					<Pixel red/>
					<Pixel red dark/>
				</Div>
				<Pixel red dark/>
			</Div>
		)
	}

	return (
		<Div fill absolute>
			<BottomLeft/>
			<TopLeft/>
			<TopRight/>
			<BottomRight/>
		</Div>
	)
}


function PokedexMainSeparator ({children}:any) {
	return (
		<Div absolute column right padding_right={3}>
			<Pixel      red h={3} />
			<Pixel dark red h={3} />
			<Pixel      red h={2} />
			<Pixel dark red h={60} />
			<Pixel      red h={2} />
			<Pixel dark red h={3} />
		</Div>
	)
}

function PokedexMainScreenCorners ({children}:any) {
	function BottomLeft () {


		let len = 6;
		let array : any = [];
		while (len-- > 1)
			array.push(
				<Div column>
					<Pixel red dark/>
					<Pixel red h={len}/>
				</Div>
			)

			return (
				<Div absolute bottom left align_bottom>
					{array}
					<Div column>
						<Pixel />
					</Div>
				</Div>
			)
	}

	function TopLeft() {
		return (
			<Div absolute top left>
				<Pixel red dark/>
			</Div>
		)
	}

	function TopRight ({children}:any) {
		return (
			<Div absolute top right>
				<Pixel red/>
			</Div>
		)
	}

	function BottomRight ({children}:any) {
		return (
			<Div absolute bottom right>
				<Div column>
					<Pixel />
					<Pixel red/>
				</Div>
			</Div>
		)
	}

	return (
		<Div fill absolute>
			<BottomLeft/>
			<TopLeft/>
			<TopRight/>
			<BottomRight/>
		</Div>
	)
}

function PokedexMainScreen ({children}:any) {
	return (
		<Div fill absolute padding_left={4} padding_top={15}>
			<Div fill>
				<Pixel  yellow w={38}    h={35}>
					<PokedexMainScreenCorners/>
				</Pixel>
			</Div>
		</Div>
	)
}

function PokedexMainControl ({children}:any) {
	return (
		<Div fill absolute padding_left={32} padding_top={57}>

			<Div absolute column fill>
				<Div padding_left={3} padding_top={1} >
					<Pixel brown w={2} h={3}/>
					<Pixel brown w={2} h={3}/>
				</Div>
				<Div>
					<Pixel brown w={3} h={3}/>
					<Pixel brown w={3} h={3}/>
					<Pixel brown w={3} h={3}/>
				</Div>
				<Div>
					<Pixel red   w={3} h={3}/>
					<Pixel brown w={2} h={3}/>
					<Pixel brown w={1} h={3}/>
				</Div>
			</Div>

			<Div absolute column fill>
				<Div padding_left={4}><Pixel dark red  w={3} h={3}/></Div>
				<Div padding_left={1}>
					<Pixel dark red w={3} h={3}/>
					<Pixel dark red w={3} h={3}/>
					<Pixel dark red w={3} h={3}/>
				</Div>
				<Div padding_left={4}><Pixel dark red  w={3} h={3}/></Div>
			</Div>
		</Div>

	)
}

function PokedexSecondayScreen ({children}:any) {
	return (
		<Div fill column absolute padding_left={9} padding_top={61}>
			<Pixel blue w={18} h={8}/>
			<Div>

				<Pixel dark red    w={1}  h={1}/>
				<Pixel dark blue   w={1}  h={1}/>
				<Pixel dark yellow w={1}  h={1}/>
				<Pixel dark blue   w={1}  h={1}/>
				<Pixel dark yellow w={13} h={1}/>
			</Div>
		</Div>
	)
}

function PixelCircle ({children}:any) {
	return (
		<>
		<Div fill absolute padding_left={3} padding_top={36}>
			<Div center style={{alignItems:"center"}}>
			<Pixel brown w={1} h={4}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={4}/>
			</Div>
		</Div>
		<Div fill absolute padding_left={4} padding_top={35}>
			<Div center style={{alignItems:"center"}}>
			<Pixel dark red w={1} h={4}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={4}/>
			</Div>
		</Div>
		</>
	)
}

function PokedexMain ({children}:any) {
	return (

		<Div>
			<Pixel red h={76} w={50}>
				<PokedexMainCorners/>
				<PokedexMainSeparator/>
				<PokedexMainScreen/>
				<PokedexMainControl/>
				<PokedexSecondayScreen/>
				<PixelCircle/>
			</Pixel>
		</Div>
	)
}


export default function Home() {

	// =========================================================================
	// Utility to clear localstorage with ?clear=1
	// Ignored in production - no other uses
	// =========================================================================
	const router = useRouter();
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production')
			if (router.query.clear == '1') localStorage.clear();
	}, [router.query]);

	// =========================================================================
	//  get_all_tasks() fetches data from localStorage.
	//  It isn't perticularly expensive, but considering that
	//  in a real application it would rather be a fetch request,
	//  it is only done once
	//  The data will be manipulated client side via the useState array
	//  `task_array` and copied to localstorage upon form validation
	// =========================================================================
	const {set_task_array} = useTaskContext();
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const tasks_from_localStorage = localStorage.getItem('Tasks') ?? "[]";
		set_task_array(JSON.parse(tasks_from_localStorage));
	}, []);

	return (
		<Frame>
			<PokedexMain/>
		</Frame>
	)
}

