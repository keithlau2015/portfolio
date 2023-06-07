 import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const scroll2El = elID => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - 60,
    behavior: 'smooth',
  });
};

const onBtnClick = (e) => {
  e.preventDefault();
  const goto = e.target.getAttribute('goto');
  setTimeout(() => {
    scroll2El(goto);
  }, 100);
}

export default function Home() {
  return (
    <main
      className={`zflex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Head>
        <title>Keith🎮Game Developer</title>        
        <link rel="icon" type="image/png" href="https://keithlau2015.github.io/portfolio/icons/MyIcon_p_NBG.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
        <link rel="manifest" href="https://keithlau2015.github.io/portfolio/site.webmanifest"/>
      </Head>      
      <section id="Landing">
      <div class="relative overflow-hidden bg-cover bg-no-repeat" style=
      {{
        backgroundPosition: '100%',
        backgroundImage: 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp',
        height: '100vh'
      }}>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div class="flex h-full items-center justify-center">
            
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                KEITH NULL
                <br/>
                <div class="horizontal"><div class="hr"></div><img src="/static/media/diamond.f7a7deb7.png" class="diamond" alt=""/><div class="hr"></div></div>
                <br/> GAME DEVELOPER
                <br/> <p class="text-white/[.8] text-xs md:text-sm xl:text-base">PROFESSIONAL LOSER</p>
              </h1>
              <button type="button" goto="Projects"
                class="rounded border-2 border-neutral-50 px-[30px] pt-[5px] pb-[7px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 hover:scale-110"
                data-te-ripple-init data-te-ripple-color="light" onClick={onBtnClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div class="container my-24 mx-auto md:px-6">
        <section id="Projects" class="mb-32 text-center">
          <h2 class="mb-12 text-3xl font-bold">
            Projects
          </h2>
          <div class="lg:gap-xl-12 grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="mb-12 lg:mb-0">
              <div class="mx-auto rounded-lg shadow-lg w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0)80%,rgba(0,0,0,0.8)20%), url('https://keithlau2015.github.io/portfolio/dc.png')]">
              <div class="text-lg font-bold text-white">Dungeon Challenger</div>
              <div class="text-xs text-white">Dungeon Challenger</div>
              {/*
              <ul class="mx-auto flex list-inside justify-center">
                <a href="#!" class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#!" class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#!" class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul>
            */}
              </div>
            </div>
            <div class="mb-12 lg:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://keithlau2015.github.io/portfolio/spaceshooter.png" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">Space Shooter</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://keithlau2015.github.io/portfolio/dtg1.png" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">正版龍虎門</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://keithlau2015.github.io/portfolio/fire.png" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">新火鳳燎原亂世英雄</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://keithlau2015.github.io/portfolio/dtg2.png" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">龍虎門M</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://keithlau2015.github.io/portfolio/manningsEvent.png" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">Mannings 50th Anniversary Event</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">Portfolio</h5>

            </div>
            <div class="mb-12 md:mb-0">
              <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[200px] transition duration-300 ease-in-out hover:scale-110 object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg" alt="avatar" />
              <h5 class="mb-4 text-lg font-bold">Department of Health TACO Internal System</h5>

            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
