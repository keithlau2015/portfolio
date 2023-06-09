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
        backgroundColor: 'rgb(50,50,50)',
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
                class="animate-bounce" onClick={onBtnClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="Projects" class="relative overflow-hidden bg-neutral-200">
        <div class="container my-24 mx-auto md:px-6 text-center">
          <h2 class="mb-12 text-3xl font-bold">
            Projects
          </h2>
          <div class="grid gap-x-6 gap-y-6 lg:gap-xl-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')]
              ">
                <div class="text-base font-bold text-white">Dungeon Challenger</div>
                <div class="text-xs text-white pb-5">Undergrad Final Year Project</div>
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
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/spaceshooter.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/spaceshooter.png')]
              ">
                <div class="text-base font-bold text-white">Space Shooter</div>
                <div class="text-xs text-white pb-5">Moblie game</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dtg1.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dtg1.png')]
              ">
                <div class="text-base font-bold text-white">正版龍虎門</div>
                <div class="text-xs text-white pb-5">Moblie game</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/fire.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/fire.png')]
              ">
                <div class="text-base font-bold text-white">新火鳳燎原亂世英雄</div>
                <div class="text-xs text-white pb-5">Moblie game</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dtg2.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dtg2.png')]
              ">
                <div class="text-base font-bold text-white">龍虎門M</div>
                <div class="text-xs text-white pb-5">Moblie game</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/manningsEvent.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/manningsEvent.png')]
              ">
                <div class="text-base font-bold text-white">Mannings 50th Anniversary Event</div>
                <div class="text-xs text-white pb-5">AR Game</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
              ">
                <div class="text-base font-bold text-white">Portfolio</div>
                <div class="text-xs text-white pb-5">Website</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/DH_logo.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/DH_logo.png')]
              ">
                <div class="text-base font-bold text-white">Department of Health TACO Internal System</div>
                <div class="text-xs text-white pb-5">Webapp</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-contain bg-no-repeat bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://opengraph.githubassets.com/732afe252a39fa69e59801230c1d7aa5ca0793af248a50d602a4caa672946ebc/keithlau2015/EditorBootloader')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://opengraph.githubassets.com/732afe252a39fa69e59801230c1d7aa5ca0793af248a50d602a4caa672946ebc/keithlau2015/EditorBootloader')]
              ">
                <div class="text-base font-bold text-white">Editor Bootloader</div>
                <div class="text-xs text-white pb-5">Unity Dev Tools</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://raw.githubusercontent.com/keithlau2015/BugReportSystem/main/image/sample_result_2.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://raw.githubusercontent.com/keithlau2015/BugReportSystem/main/image/sample_result_2.png')]
              ">
                <div class="text-base font-bold text-white">Bug Report System</div>
                <div class="text-xs text-white pb-5">Unity Utilities</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
              ">
                <div class="text-base font-bold text-white">Sky Garden</div>
                <div class="text-xs text-white pb-5">On Going Game Project</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
              ">
                <div class="text-base font-bold text-white">Druid</div>
                <div class="text-xs text-white pb-5">On Going Game Project</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]
              ">
                <div class="text-base font-bold text-white">C# TCP/UDP Server</div>
                <div class="text-xs text-white pb-5">Game Server</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://cdnb.artstation.com/p/assets/images/images/054/498/103/large/keith-lau-helloworld.jpg?1664694884')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://cdnb.artstation.com/p/assets/images/images/054/498/103/large/keith-lau-helloworld.jpg?1664694884')]
              ">
                <div class="text-base font-bold text-white">Hello World</div>
                <div class="text-xs text-white pb-5">3D Model Project</div>
              </div>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/50 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://cdna.artstation.com/p/assets/images/images/054/497/918/large/keith-lau-cozyroompartice.jpg?1664694302')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://cdna.artstation.com/p/assets/images/images/054/497/918/large/keith-lau-cozyroompartice.jpg?1664694302')]
              ">
                <div class="text-base font-bold text-white">Lowploy Room</div>
                <div class="text-xs text-white pb-5">3D Model Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Milestone" class="relative overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
        <div class="container my-24 mx-auto md:px-6">
          <h2 class="mb-12 text-3xl font-bold text-white text-center">
            Milestone
          </h2>
          <ol class="relative ml-20 border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-10">            
                <span class="absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white">
                  <svg aria-hidden="true" class="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">Karin Group<span class="bg-amber-300 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">12/2022 - 12/2023</time>
                <p class="mb-4 text-base font-normal text-gray-500">Analyst Programmer</p>
                {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a>*/}
            </li>
            <li class="mb-10 ml-10">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white">
                    <svg aria-hidden="true" class="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-white">Dream Global Entertainment Limited</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">07/2020 - 09/2022</time>
                <p class="text-base font-normal text-gray-500">Cocos Game Development Engineer</p>
            </li><li class="mb-10 ml-10">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white">
                    <svg aria-hidden="true" class="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-white">Gameone Group Limited</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">06/2020 - 07/2022</time>
                <p class="text-base font-normal text-gray-500">Senior Programmer</p>
            </li>
            <li class="ml-10">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white">
                    <svg aria-hidden="true" class="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-white">Graduate from Tamkang University</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">09/2016 - 06/2020</time>
                <p class="text-base font-normal text-gray-500">Innovative Information and Technology Department</p>
            </li>
          </ol>
        </div>
      </section>
      <section id="Skills" class="relative overflow-hidden bg-neutral-200">
        <div class="container my-24 mx-auto md:px-6 text-center">
          <h2 class="mb-12 text-3xl font-bold">
            Skill Set
          </h2>
          <div class="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/programming.png"/>
              <h5 class="text-base font-bold ml-3">Programming</h5>
            </figure>
            <div class="p-6">
              <div class="grid justify-items-stretch gap-x-3 gap-y-3 lg:gap-xl-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                  <figure class="p-6">
                    <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-programming-language-48.png"/>
                    <h5 class="text-base font-bold text-amber-300">Language</h5>
                  </figure>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">C#</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="60"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">JAVA</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="40"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">LUA</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="50"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">PYTHON</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="30"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">JS</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="25"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                </div>
                <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                  <figure class="p-6">
                    <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-database-50.png"/>
                    <h5 class="text-base font-bold text-amber-300">Database</h5>
                  </figure>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">MySQL</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="40"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">MongoDB</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="30"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">MicrosoftSQL</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="30"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                </div>
                <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                  <figure class="p-6">
                    <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-tools-48.png"/>
                    <h5 class="text-base font-bold text-amber-300">Tooling</h5>
                  </figure>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">Nodejs</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="45"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">Android Studio</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="15"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">Xcode</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="10"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">Unity</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="75"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="ml-5 mr-3 text-amber-300">Unreal</div>
                    <progress
                    aria-label="loading 25%"
                    id="p01a"
                    max="100"
                    value="15"
                    className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                    >
                    </progress>
                  </div>
                </div>
              </div>
            </div>
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-art-48.png"/>
              <h5 class="text-base font-bold ml-3">Art</h5>
            </figure>
            <div class="p-6">
              <div class="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">Blender</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="45"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">Krita</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="15"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">Photoshop</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
              </div>
            </div>
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-video-editing-24.png"/>
              <h5 class="text-base font-bold ml-3">Video Editing</h5>
            </figure>
            <div class="p-6">
              <div class="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">After Effect</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="45"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        
      </section>
    </main>
  )
}
