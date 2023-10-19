
import { GetServerSideProps } from "next";
import Head from "next/head"
//import RootLayout from "@/layout/RootLayout"
//import ProjectLayout from "@/layout/ProjectLayout"
import type { ReactElement } from 'react'
//import { getData } from "../_app";


function Projects ({seo}:any) {
	return (
		<>
		</>
	)
}

export default Projects


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

	return {
		redirect: {
			destination: '/pokemon/bulbasaur' ,
			permanent: true, // Set to true if it's a permanent redirect
		},
	};
};




