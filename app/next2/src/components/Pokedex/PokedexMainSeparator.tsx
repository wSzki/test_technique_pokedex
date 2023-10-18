
import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PokedexMainSeparator ({children}:any) {
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

