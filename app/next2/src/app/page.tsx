

import Pokedex from "@/components/Pokedex"
import { StyleSheetManager } from 'styled-components'

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import GraphQLProvider from "@/lib/GraphQLProvider"
// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================



async function getData() {
	//const res = await fetch('https://pokeapi.co/api/v2/pokemon')
	//const { loading, error, data } = await useQuery(GET_POKEMONS);
	//console.log(data);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	//if (!res.ok) {
	//// This will activate the closest `error.js` Error Boundary
	//throw new Error('Failed to fetch data')
	//}

	//return res.json()
}

export default async function Home() {

	//const data = await getData()
	//console.log(data.results[0]);
	// =========================================================================
	// Utility to clear localstorage with ?clear=1
	// Ignored in production - no other uses
	// =========================================================================
	//const router = useRouter();
	//useEffect(() => {
	//if (process.env.NODE_ENV !== 'production')
	//if (router.query.clear == '1') localStorage.clear();
	//}, [router.query]);

	// =========================================================================
	//  get_all_tasks() fetches data from localStorage.
	//  It isn't perticularly expensive, but considering that
	//  in a real application it would rather be a fetch request,
	//  it is only done once
	//  The data will be manipulated client side via the useState array
	//  `task_array` and copied to localstorage upon form validation
	// =========================================================================
	//const {set_task_array} = useTaskContext();
	//useEffect(() => {
	//if (typeof window === 'undefined') return;
	//const tasks_from_localStorage = localStorage.getItem('Tasks') ?? "[]";
	//set_task_array(JSON.parse(tasks_from_localStorage));
	//}, []);

	return (
		//<Frame>
			<div style={{display:"flex", height:"100vh"}}>

				<GraphQLProvider>
					<Pokedex/>
				</GraphQLProvider>
			</div>
			//</Frame>
	)
}



