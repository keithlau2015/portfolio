import { Play } from 'next/font/google';
import Head from 'next/head';
import { ProjectSection } from './project/projectSection';
import { CareerSection } from './career/careerSection';
import Image from 'next/image';
import {useState, useEffect} from 'react';

const play = Play({weight:'400',subsets:['cyrillic']})

export default function Home() {
  const [projectFilter, setProjectFilter] = useState(undefined);
  const [canvasCtx, setCanvasCtx] = useState(undefined);
  const [canvasWidth, setCanvasWidth] = useState(undefined);
  const [canvasHeight, setCanvasHeight] = useState(undefined);

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

  useEffect(() => {
    // Initialising the canvas
    var canvas = document.querySelector('canvas');
    setCanvasCtx(canvas.getContext('2d'));
    // Setting the width and height of the canvas
    setCanvasWidth(window.innerWidth);
    setCanvasHeight(window.innerHeight);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
    columns = canvasWidth / fontSize;

    // Setting up the drops
    var drops = []
    for (var i = 0; i < columns; i++) {
      drops.push(1);
    }

    // Setting up the draw function
    function run() {
      if(canvasCtx == undefined || canvasCtx == null || canvasWidth == undefined || canvasWidth == null || canvasHeight == undefined || canvasHeight == null)
        return;
      canvasCtx.fillStyle = 'rgba(0, 0, 0, .1)';
      canvasCtx.fillRect(0, 0, canvasWidth, canvasHeight);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        canvasCtx.fillStyle = '#00d7e7';
        canvasCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvasHeight && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    var interval = setInterval(run, 33);

    window.addEventListener("resize", () => {
      if(canvasCtx == undefined || canvasCtx == null || canvasWidth == undefined || canvasWidth == null || canvasHeight == undefined || canvasHeight == null)
        return;
      clearInterval(interval);
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
      canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    });
    
    const callback = function(entries) {
      entries.forEach(entry => {
    
        // Is the element in the viewport?
        if (entry.isIntersecting) {
    
          // Add the fadeIn class:
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
    
          // Otherwise remove the fadein class
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    }; 

    const targets = document.querySelectorAll(".js-show-on-scroll");
    const observer = new IntersectionObserver(callback);
    targets.forEach(function(target) {
      // Hide the element
      target.classList.add("opacity-0");

      // Add the element to the watcher
      observer.observe(target);
    });
       
  })
  return (
    <main
      className={`zflex min-h-screen flex-col items-center ${play.className}`}
    >
      <Head>
        <title>Keith🎮Game Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
      </Head>
      <section id="Landing">
      <div className="relative overflow-hidden min-h-screen">
        <canvas className="static block -z-50 brightness-[.4]" style=
        {{
          backgroundPosition: '100%',
          backgroundColor: 'rgb(20,20,20)',
          height: '100vh'
        }}></canvas>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden">
          <div className="flex h-full items-center justify-center">            
            <div className="px-6 text-center text-white md:px-12 js-show-on-scroll">
              <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                KEITH NULL
                <br/>
                <div className="horizontal"><div className="hr"></div><div className="hr"></div></div>
                <br/> GAME DEVELOPER
                <br/> <p className="text-white/[.8] text-xs md:text-sm xl:text-base">PROFESSIONAL LOSER</p>
              </h1>
              <button type="button" goto="Projects"
                className="py-10 px-20 animate-bounce" onClick={onBtnClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="Projects" className="relative z-0 overflow-hidden bg-neutral-200">
        <div className="container my-10 mx-auto md:px-6 text-center js-show-on-scroll">
          <h2 className="mb-5 text-3xl font-bold">
            PROJECTS
          </h2>
          <ProjectSection filter={projectFilter} clearFilterCB={clearFilterCB}/>          
        </div>
      </section>
      <section id="Milestone" className="relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
        <div className="container my-24 mx-auto md:px-6 js-show-on-scroll">
          <h2 className="mb-12 text-3xl font-bold text-white text-center">
            CAREER
          </h2>
          <CareerSection gotoCB={onBtnClick}/>
        </div>
      </section>
      <section id="Skills" className="relative z-0 overflow-hidden">
        <div className="container my-24 mx-auto md:px-6 text-center js-show-on-scroll">
          <h2 className="mb-12 text-3xl font-bold">
            TECHNOLOGIES
          </h2>
          <div className="overflow-hidden text-center text-slate-500 shadow-slate-200">
            <figure className="p-6 pb-0 flex items-center justify-center">
              <img className="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/programming.png"/>
              <h5 className="text-base font-bold ml-3">CODING</h5>
            </figure>
            <div className="p-6 grid justify-items-stretch gap-x-3 gap-y-3 lg:gap-xl-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div className="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure className="p-6">
                  <img className="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-programming-language-48.png"/>
                  <h5 className="text-base font-bold text-amber-300">LANGUAGE</h5>
                </figure>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">C#</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="80"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">LUA</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">JAVA</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="60"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">PYTHON</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="50"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">C++</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">DART</div>
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
              <div className="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure className="p-6">
                  <img className="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-tools-48.png"/>
                  <h5 className="text-base font-bold text-amber-300">FRAMEWORK</h5>
                </figure>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">NEXT JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">TAILWINDCSS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">STRUTS2</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">EXPRESS JS</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">THREE JS</div>
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
              <div class="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-software-48.png"/>
                  <h5 class="text-base font-bold text-amber-300">SOFTWARE</h5>
                </figure>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">ANDROID STUDIO</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">XCODE</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">UNITY</div>    
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="70"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  ></progress>                
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">UNREAL</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">COCOS2D</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="30"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">FLUTTER</div>
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
              <div className="pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <figure class="p-6">
                  <img class="object-contain h-10 w-10 mx-auto" src="https://keithlau2015.github.io/portfolio/icons8-database-50.png"/>
                  <h5 class="text-base font-bold text-amber-300">DATABASE</h5>
                </figure>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">MY SQL</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">MONGO DB</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="25"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">MICROSOFT SQL</div>    
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="20"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  ></progress>                
                </div>
              </div>
            </div>
            <figure className="p-6 pb-0 flex items-center justify-center">
              <img className="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-robot-48.png"/>
              <h5 className="text-base font-bold ml-3">AI</h5>
            </figure>
            <div className="p-6">
              <div className="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">STABLE DIFFUSION</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="60"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">CHATGPT</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="40"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">AUTOGPT</div>
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
            </div>
            <figure className="p-6 pb-0 flex items-center justify-center">
              <img className="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-art-48.png"/>
              <h5 className="text-base font-bold ml-3">Art</h5>
            </figure>
            <div className="p-6">
              <div className="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">BLENDER</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="45"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">KRITA</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="15"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">PHOTOSHOP</div>
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
            <figure className="p-6 pb-0 flex items-center justify-center">
              <img className="object-contain h-10 w-10" src="https://keithlau2015.github.io/portfolio/icons8-video-editing-48.png"/>
              <h5 className="text-base font-bold ml-3">VIDEO EDITING</h5>
            </figure>
            <div className="p-6">
              <div className="pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200">
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">AFTER EFFECT</div>
                  <progress
                  aria-label="loading 25%"
                  id="p01a"
                  max="100"
                  value="45"
                  className="my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
                  >
                  </progress>                    
                </div>
                <div className="flex items-center justify-between">
                  <div className="ml-5 mr-3 text-amber-300">PREMIERE PRO</div>
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
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className="relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
        <div className="container my-24 mx-auto md:px-6 js-show-on-scroll">
          <h2 className="mb-12 text-3xl font-bold text-white text-center">
            CONTACT
          </h2>
          <div className="mb-5 flex flex-row max-sm:flex-col items-center justify-evenly" style={{ transition: "all .5s ease 0s" }}>
            <div className="text-amber-300">
                PHONE: +852 53717963
            </div>
            <div className="text-amber-300">
                EMAIL: s101315@gmail.com
            </div>            
          </div>
          <div className="mb-5 flex flex-row items-center justify-evenly" style={{ transition: "all .5s ease 0s" }}>
            <a href='https://www.instagram.com/nullpointinteractive/' className="h-[30px] w-[30px] relative mr-1 ml-1 ">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-ig-48.png"
                fill="true"
                alt='keithlau ig'
              />
            </a>
            <a href='https://www.youtube.com/@keithlau7747/videos' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-youtube-50.png"
                fill="true"
                alt='keithlau youtube'
              />
            </a>
            <a href='https://github.com/keithlau2015' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-github-30.png"
                fill="true"
                alt='keithlau github'
              />
            </a>
            <a href='https://www.linkedin.com/in/keith-lau-b7379b217/' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-linkedin-50.png"
                fill="true"
                alt='keithlau linkedin'
              />
            </a>
            <a href='https://keithnull.artstation.com/' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-artstation-32.png"
                fill="true"
                alt='keithlau artstation'
              />
            </a>
            <a href='https://twitter.com/keithnulled' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-twitter-30.png"
                fill="true"
                alt='keithlau twitter'
              />
            </a>
            <div href='https://discordapp.com/users/313613491816890369' className="h-[30px] w-[30px] relative mr-1 ml-1">
              <Image
                src="https://keithlau2015.github.io/portfolio/icons8-discord-30.png"
                fill="true"
                alt='keithlau discord'
              />
            </div>
          </div>
        </div>
      </section>
      <section id="Footer" className="relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900">
          <div className="mb-5 text-sm text-white text-center">
            © Copyright 2023 keithlau
          </div>
      </section>
    </main>
  )
}
