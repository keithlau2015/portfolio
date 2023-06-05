 import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`zflex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Head>
        <title>Keith🎮Game Developer</title>
        <link rel="shortcut icon" href="https://keithlau2015.github.io/portfolio/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
      </Head>      
      
      <div class="relative overflow-hidden bg-cover bg-no-repeat" style=
      {{
        backgroundPosition: '100%',
        backgroundImage: 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp',
        height: '700px'
      }}>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                KEITH NULL
                <br/>
                <div class="horizontal"><div class="hr"></div><img src="/static/media/diamond.f7a7deb7.png" class="diamond" alt=""/><div class="hr"></div></div>
                <br/> GAME DEVELOPER
              </h1>
              <button type="button"
                class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <img
          src="https://keithlau2015.github.io/portfolio/icons/android-chrome-512x512.png"
          class="mx-auto mb-4 w-32 rounded-lg"
          alt="Avatar" />
        <h5 class="mb-2 text-xl font-medium leading-tight">Keith</h5>
        <p class="text-neutral-500 dark:text-neutral-400">Game Developer</p>
      </div>

    </main>
  )
}
