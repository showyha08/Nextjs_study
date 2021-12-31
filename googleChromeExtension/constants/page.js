const Pages = () => {
	const suffix = process.env.NODE_ENV === "development" ? "" : ".html"
	const data = {
		index: `index${suffix}`,
		about: `about${suffix}`
	}
	return data
}

export default Pages
