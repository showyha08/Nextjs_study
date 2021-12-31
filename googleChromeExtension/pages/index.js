import React from 'react'
import Link from 'next/link'
import Page from "../constants/page"

const Index = () => {
	return (
		<div>
			Hello World!!
			<Link href={Page().about}>
				<a>この拡張について</a>
			</Link>
		</div>
	)
}

export default Index

