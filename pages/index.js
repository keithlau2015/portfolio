import { Play } from 'next/font/google';
import Head from 'next/head';
import { ProjectSection } from './project/projectSection';
import { CareerSection } from './career/careerSection';
import Image from 'next/image';
import {useState} from 'react';

const play = Play({weight:'400',subsets:['cyrillic']})

export default function Home() {
  const [projectFilter, setProjectFilter] = useState(undefined);

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    const param = e.target.getAttribute('param');
    console.log(param);
    setProjectFilter(param);
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID)?.offsetTop,
      behavior: 'smooth',
    });
  };

  const clearFilterCB = () => {
    setProjectFilter(undefined);
  }

  return (
    <main
      class={`zflex min-h-screen flex-col items-center ${play.className}`}
    >
      <Head>
        <title>Keith🎮Game Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
      </Head>      
      <section id="Landing">
      <div class="relative overflow-hidden bg-cover bg-no-repeat" style=
      {{
        backgroundPosition: '100%',
        backgroundColor: 'rgb(20,20,20)',
        height: '100vh'
      }}>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden">
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
                class="py-10 px-20 animate-bounce" onClick={onBtnClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="Projects" class="relative z-0 overflow-hidden bg-neutral-200">
        <div class="container my-10 mx-auto md:px-6 text-center">
          <h2 class="mb-5 text-3xl font-bold">
            PROJECTS
          </h2>
          <ProjectSection filter={projectFilter} clearFilterCB={clearFilterCB}/>          
        </div>
      </section>
      <section id="Milestone" class="relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
        <div class="container my-24 mx-auto md:px-6">
          <h2 class="mb-12 text-3xl font-bold text-white text-center">
            CAREER
          </h2>
          <CareerSection gotoCB={onBtnClick}/>
        </div>
      </section>
      <section id="Skills" class="relative z-0 overflow-hidden bg-neutral-200">
        <div class="container my-24 mx-auto md:px-6 text-center">
          <h2 class="mb-12 text-3xl font-bold">
            TECHNOLOGIES
          </h2>
          <div class="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/programming.png"/>
              <h5 class="text-base font-bold ml-3">CODING</h5>
            </figure>
            <div class="p-6 grid justify-items-stretch gap-x-3 gap-y-3 lg:gap-xl-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-programming-language-48.png"/>
                  <h5 class="text-base font-bold text-amber-300">LANGUAGE</h5>
                </figure>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">C#</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="80"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">LUA</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">JAVA</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="60"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">PYTHON</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="50"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">C++</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">DART</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="15"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
              </div>
              <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-tools-48.png"/>
                  <h5 class="text-base font-bold text-amber-300">FRAMEWORK</h5>
                </figure>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">NEXT JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">TAILWINDCSS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">STRUTS2</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">EXPRESS JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">THREE JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="15"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
              </div>
              <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-software-48.png"/>
                  <h5 class="text-base font-bold text-amber-300">SOFTWARE</h5>
                </figure>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">ANDROID STUDIO</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">XCODE</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">UNITY</div>    
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="70"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  ></progress>                
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">UNREAL</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">COCOS2D</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">FLUTTER</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
              </div>
              <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-database-50.png"/>
                  <h5 class="text-base font-bold text-amber-300">DATABASE</h5>
                </figure>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">MY SQL</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">MONGO DB</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="25"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">MICROSOFT SQL</div>    
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  ></progress>                
                </div>
              </div>
            </div>
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-robot-48.png"/>
              <h5 class="text-base font-bold ml-3">AI</h5>
            </figure>
            <div class="p-6">
              <div class="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">Stable Diffusion</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="60"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">ChatGPT</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">AutoGPT</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="25"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
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
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
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
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
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
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
              </div>
            </div>
            <figure class="p-6 pb-0 flex items-center justify-center">
              <img class="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-video-editing-48.png"/>
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
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div class="flex items-center justify-between">
                  <div class="ml-5 mr-3 text-amber-300">Premiere Pro</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="25"
                  class="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" class="relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
        <div class="container my-24 mx-auto md:px-6">
          <h2 class="mb-12 text-3xl font-bold text-white text-center">
            Contact
          </h2>
          <div className="mb-5 flex flex-row max-sm:flex-col items-center justify-evenly" style={{ transition: "all .5s ease 0s" }}>
            <div className="text-amber-300">
                Phone: +852 53717963
            </div>
            <div className="text-amber-300">
                Email: s101315@gmail.com
            </div>            
          </div>
          <div className="mb-5 flex flex-row items-center justify-evenly" style={{ transition: "all .5s ease 0s" }}>
            <a href='https://www.instagram.com/nullpointinteractive/' className="h-[30px] w-[30px] relative mr-1 ml-1 ">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-ig-48.png"
                fill="true"
              />
            </a>
            <a href='https://www.youtube.com/@keithlau7747/videos' className="h-[30px] w-[30px] relative mr-1 ml-1 group-hover:scale-120">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-youtube-50.png"
                fill="true"
              />
            </a>
            <a href='https://github.com/keithlau2015' className="h-[30px] w-[30px] relative mr-1 ml-1 group-hover:scale-120">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-github-30.png"
                fill="true"
              />
            </a>
            <a href='https://www.linkedin.com/in/keith-lau-b7379b217/' className="h-[30px] w-[30px] relative mr-1 ml-1 group-hover:scale-120">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-linkedin-50.png"
                fill="true"
              />
            </a>
            <a href='https://keithnull.artstation.com/' className="h-[30px] w-[30px] relative mr-1 ml-1 group-hover:scale-120">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-artstation-32.png"
                fill="true"
              />
            </a>
            <a href='https://twitter.com/keithnulled' className="h-[30px] w-[30px] relative mr-1 ml-1 group-hover:scale-120">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-twitter-30.png"
                fill="true"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
