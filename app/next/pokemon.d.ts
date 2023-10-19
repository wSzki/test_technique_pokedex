interface Pokemon extends React.IntrinsicAttributes {
	id          : number,
	name        : string,
	height     ?: number,
	weight     ?: number,
	types      ?: string[],
	description?: string,
	sprite     ?: string
}

declare global {
	namespace NodeJS {
		interface Global {
			Pokemon: Pokemon;
		}
	}
}
