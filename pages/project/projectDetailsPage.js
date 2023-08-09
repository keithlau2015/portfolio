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
    const index = router.query.index;
    const project = projects[index];
    console.log(router.query);
    return(
    <main
        className={`zflex min-h-screen flex-col items-center ${play.className}`}
    >
        <Head>
            <title>{project.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"/>
        </Head>
        <section id="Landing" className="relative z-0 overflow-hidden bg-neutral-900">
            <Link href={{ pathname: '/'}} className="justify-center">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: 10, color: 'rgb(203,213,225)', padding: '0px 5px 0px 5px'}}/>
            </Link>
            <div className="container my-10 mx-auto md:px-6">
                <h2 className="mb-5 text-3xl font-bold text-amber-300 text-center">
                    {project.title}
                </h2>
                <div className="container my-10 mx-auto md:px-6 text-left text-white">
                    {project.details}
                </div>
                <div className="underline text-center font-bold text-amber-300">
                    Built with
                </div>
                <ul className="mb-2 mx-auto flex list-inside justify-center">                    
                    {
                    project.tech?.includes("C#") 
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-c-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Java") 
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-java-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Unity")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-unity-48.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("MySQL")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-mysql-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Lua")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-lua-language-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Python")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-python-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Blender")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-blender-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Nodejs")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-nodejs-32.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Js")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-javascript-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Tailwind")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-tailwindcss-48.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Dart")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-dart-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                    {
                    project.tech?.includes("Flutter")
                    &&
                    <div className="h-[20px] w-[20px] relative mr-1 ml-1 shadow-md shadow-slate-900">
                        <Image
                        src="https://keithlau2015.github.io/portfolio/icons8-flutter-50.png"
                        fill="true"
                        alt="icon"
                        />
                    </div>
                    }
                </ul>
            </div>
        </section>
        <section id="Gallery" className="relative z-0 overflow-hidden">
            <div class="my-5 text-2xl text-center">GALLERY</div>            
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="grid gap-x-6 gap-y-6 lg:gap-xl-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[
                        project.media.map(url => (
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center rounded shadow-md shadow-slate-900"
                                    src={url} />
                            </div>
                        ))
                    ]}
                </div>
            </div>
        </section>
    </main>
    );
}