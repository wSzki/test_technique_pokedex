'use client';
import { createContext, useContext } from 'react';
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

	const [ main_screen_content, set_main_screen_content ] = useState<any>({});
	const [ main_info_content,   set_main_info_content   ] = useState<any>({});
	const [ weight,              set_weight              ] = useState<any>({});
	const [ height,              set_height              ] = useState<any>({});
	const [ types,               set_types               ] = useState<any>({});
	const [ description,         set_description         ] = useState<any>({});

  return (
    <GlobalContext.Provider value={{
		main_screen_content, set_main_screen_content,
		main_info_content,   set_main_info_content,
		weight,              set_weight,
		height,              set_height,
		types,               set_types,
		description,         set_description
		}}>
      {children}
    </GlobalContext.Provider>
  );
}
