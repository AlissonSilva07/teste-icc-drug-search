const pathBuilder = (mode: string) => {
	const production = "";
	const development = "https://api.fda.gov";

	return mode === "production" ? production : development;
};

const baseURL = pathBuilder(import.meta.env.MODE);

export { baseURL };