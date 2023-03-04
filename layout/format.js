import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'

function Format({children}) {
  return (
    <>
    <Head>
        <title>Blog</title>
    </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Format