import { Play } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import {projects} from './projectSection';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const play = Play({weight:'400',subsets:['cyrillic']})

export default function careerDetailsPage() {
    const router = useRouter();
    const [canvasCtx, setCanvasCtx] = useState(undefined);
    const [canvasWidth, setCanvasWidth] = useState(undefined);
    const [canvasHeight, setCanvasHeight] = useState(undefined);
    const index = router.query.index;
    const project = projects[index];
    console.log(router.query);

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
            canvasCtx.fillStyle = '#e79600';
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
           
    });

    return(
    <main
        className={`zflex min-h-screen js-show-on-scroll ${play.className}`}
    >
        <Head>
            <title>{project?.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
        </Head>
            <canvas className="static block -z-50 brightness-[.4]" style=
            {{  
            backgroundPosition: '100%',
            backgroundColor: 'rgb(20,20,20)',
            height: '100vh'
            }}>
            </canvas>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden">
                <div className="flex h-full items-center justify-center">
                    <div className="z-10 px-6 text-center text-white md:px-12 js-show-on-scroll">
                        <h2 className="mb-5 text-3xl font-bold text-white text-center py-10">
                            {project?.title}
                        </h2>
                        <div class="flex overflow-x-auto overflow-hidden snap-mandatory scroll-auto">
                            {[
                                project?.media.img.map(url => (
                                    <div class="flex-shrink-0 rounded-full snap-center mx-2">
                                        <img
                                            alt="gallery"
                                            class="block w-[350px] h-[250px] rounded-lg object-cover object-center rounded shadow-md shadow-slate-900"
                                            src={url} />
                                    </div>
                                ))
                            ]}
                        </div>
                        <div className="container my-10 mx-auto md:px-6 text-left text-amber-300">
                            {project?.details}
                        </div>
                        {
                            project?.media?.url != "" 
                            &&
                            <div>
                            <div className="text-amber-300 font-bold">Link</div>
                                <div className="">
                                    {[
                                        <a href={project?.media?.url} className="text-amber-300 italic no-underline hover:underline px-2">
                                            {project?.media?.url}
                                        </a>
                                    ]}
                                </div>
                            </div>
                        }
                        <br></br>
                        <Link href={{ pathname: '/'}}>
                            <div className='flex justify-center items-center'><FontAwesomeIcon icon={faHouse} style={{ fontSize: 15, color: 'rgb(255,255,255)', padding: '0px 5px 0px 5px'}}/></div>
                        </Link>
                    </div>
                </div>
            </div>      
            {/* <section id="Details" className="relative z-0 overflow-hidden bg-neutral-900">            
                <ul className="mb-2 mx-auto flex list-inside justify-center">                    
                            {
                            project?.tech?.includes("C#") 
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-c-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Java") 
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-java-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Unity")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-unity-48.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("MySQL")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-mysql-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Lua")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-lua-language-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Python")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-python-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Blender")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-blender-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Nodejs")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-nodejs-32.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Js")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-javascript-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Tailwind")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-tailwindcss-48.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Dart")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-dart-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                            {
                            project?.tech?.includes("Flutter")
                            &&
                            <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                                <Image
                                src="https://keithlau2015.github.io/portfolio/icons8-flutter-50.png"
                                fill="true"
                                alt="icon"
                                />
                            </div>
                            }
                </ul>            
            </section> */}
    </main>
    );
}  