import { Play } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import {projects} from './projectSection';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

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
            <div className="container my-10 mx-auto md:px-6 text-center js-show-on-scroll">
                <h2 className="mb-5 text-3xl font-bold text-amber-300">
                    {project.title}
                </h2>
            </div>
        </section>
        <section id="Projects" className="relative z-0 overflow-hidden bg-neutral-200">
            <div class="grid grid-cols-6 gap-4">
                <div className="container col-start-1 col-end-4 my-10 mx-10 md:px-6 text-center bg-neutral-900">
                    Clients
                </div>
                <div className="container col-end-7 col-span-2 my-10 mx-10 md:px-6 text-center bg-neutral-900">
                    Clients
                </div>
            </div>            
        </section>
    </main>
    );
}