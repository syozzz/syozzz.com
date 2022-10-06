import Head from 'next/head'

export default function CustomHead ({title}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <meta name="author" content="syozzz"/>
                <meta name="keywords" content="personal page,syozzz"/>
                <title>{title}</title>
            </Head>
        </>
    )
}