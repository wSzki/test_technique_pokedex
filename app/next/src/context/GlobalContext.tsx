'use client';
import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

const GlobalContext:any = createContext({});

export function useGlobalContext(){
   const context = useContext(GlobalContext);
	if (!context) {
		throw new Error('Card context error');
	}
	return context;
}

export default function GlobalProvider({ children }:any) {

	const [ main_screen_content,  set_main_screen_content ] = useState<any>({});
	const [ main_info_content,    set_main_info_content   ] = useState<any>({});
	const [ weight,               set_weight              ] = useState<any>({});
	const [ height,               set_height              ] = useState<any>({});
	const [ types,                set_types               ] = useState<any>({});
	const [ description,          set_description         ] = useState<any>({});
	const [ pagination,           set_pagination          ] = useState<number>(10);
	const [ selected,             set_selected            ] = useState<number>(0);
	const [ current_pokemon_id,   set_current_pokemon_id  ] = useState<number>(0);
	const [ current_pokemon_name, set_current_pokemon_name] = useState<string>("");
	const [ offset,               set_offset              ] = useState<number>(0);
	const [ search,               set_search              ] = useState<string>("");

  return (
    <GlobalContext.Provider value={{
		main_screen_content, set_main_screen_content,
		main_info_content,   set_main_info_content,
		weight,              set_weight,
		height,              set_height,
		types,               set_types,
		description,         set_description,
		pagination,          set_pagination,
		selected,            set_selected,
		current_pokemon_id,  set_current_pokemon_id,
		current_pokemon_name,set_current_pokemon_name,
		offset,              set_offset,
		search,              set_search
		}}>
      {children}
    </GlobalContext.Provider>
  );
}
