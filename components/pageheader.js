import Head from 'next/head'

const PageHeader = (props) => {

  	return (<>
		<Head>
			<title>Data Science with Daniel - {props.title}</title>
			<meta name="description" content={props.description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	</>)
}

export default PageHeader
