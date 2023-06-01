 import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`zflex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Keith🎮Game Developer</title>
        <link rel="shortcut icon" href="https://keithlau2015.github.io/portfolio/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
      </Head>      
      
      

    </main>
  )
}
