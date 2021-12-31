import React from "react"
import Link from "next/link"
import Page from "../constants/page";

const About = () => {
	return (
		<div>
			このExtensionを作成しました。
			<Link href={Page().index}>
				<a>トップページへ</a>
			</Link>
		</div>
	)
}

export default About;
