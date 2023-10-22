import Div from "@/components/Div"
import Pixel from "@/components/Pixel"
import {CgMenuGridR} from 'react-icons/cg'
import {AiFillHeart} from 'react-icons/ai'
import {SiGooglehome} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {SlMagnifier} from 'react-icons/sl'

export default function PixelCircle ({x, y, heart, noheart, home, menu, zoom}:any) {
	return (
		<>
			<Div fill absolute padding_left={x - 0.5} padding_top={y + 0.5}>
				<Div center >
					<Pixel brown w={1} h={4}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={4}/>
				</Div>
			</Div>
			<Div fill absolute padding_left={x} padding_top={y}>
				<Div center >
					<Pixel dark red w={1} h={4}/>
					<Pixel dark red w={1} h={5}/>
					<Pixel dark red w={1} h={5}/>
					<Pixel dark red w={1} h={5}/>
					<Pixel dark red w={1} h={4}/>
					{ heart && <Div absolute><AiFillHeart style={{fontSize:"30px", color:"pink"}}/></Div>}
					{ noheart && <Div absolute><AiFillHeart style={{fontSize:"30px", color:"gray"}}/></Div>}
					{ menu && <Div absolute><CgMenuGridR style={{fontSize:"30px", color:"white"}}/></Div>}
					{ home && <Div absolute><AiFillHome style={{fontSize:"30px", color:"white"}}/></Div>}
					{ zoom && <Div absolute><SlMagnifier style={{fontSize:"30px", color:"white"}}/></Div>}

				</Div>
			</Div>
		</>
	)
}
