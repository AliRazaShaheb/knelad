import React from 'react'
import Head from "next/head";
import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Head>
                <title>KneLad</title>
                <link rel="icon" href="/knelad_bk.svg" />
            </Head>
            {children}
        </>
    )
}

export default Layout
