import {ProjectCard} from './projectCard'

export function ProjectSection() {
    const projects = [
        {type:["Game"], subType:["PC"], owner:"Personal", title:"Dungeon Challenger", description:"Undergrad Final Year Project", bg:"url('https://keithlau2015.github.io/portfolio/dc.png')", duty:"My final year project. A singleplayer first person perspetive with random generated map game, player needed to handle monster, hunger and sanity to survive much level they can."},
        {type:["Game"], subType:["Moblie"],  owner:"Personal", title:"Space Shooter", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/spaceshooter.png')", duty:"My first moblie game, also a challenge for myself finished the game within 1 week. A singleplay 3rd person shooter game, player needed to control the spacecraft to fight obstacle, also player able to get reward through watching ads, and unlock more different playstle spacecraft."},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"正版龍虎門", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/dtg1.png')"},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"新火鳳燎原亂世英雄", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/fire.png')"},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"龍虎門M", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/dtg2.png')"},
        {type:["Game"], subType:["AR"], owner:"CIMPTech", title:"Mannings 50th Anniversary Event", description:"AR Game", bg:"url('https://keithlau2015.github.io/portfolio/manningsEvent.png')"},
        {type:["Application", "Website"], owner:"Karin Group", title:"Leisure and Cultural Services Department Electronic Collection Recording System", description:"Application", bg:"url('https://keithlau2015.github.io/portfolio/lcsd.png')"},
        {type:["Application", "Website"], owner:"Karin Group", title:"Department of Health TACO Information System", description:"Application", bg:"url('https://keithlau2015.github.io/portfolio/DH_logo.png')"},
        {type:["DevTools"], owner:"Personal", title:"Editor Bootloader", description:"Unity Dev Tools", bg:"url('https://opengraph.githubassets.com/732afe252a39fa69e59801230c1d7aa5ca0793af248a50d602a4caa672946ebc/keithlau2015/EditorBootloader')"},
        {type:["DevTools"], owner:"Personal", title:"Bug Report System", description:"Unity Utilities", bg:"url('https://raw.githubusercontent.com/keithlau2015/BugReportSystem/main/image/sample_result_2.png')"},
        {type:["Game"], subType:["PC"], owner:"Personal", title:"Sky Garden", description:"On Going Game Project", bg:"url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')"},
        {type:["Game"], subType:["PC", "Moblie"], owner:"Personal", title:"Druid", description:"On Going Game Project", bg:"url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')"},
        {type:["Game", "Server"], owner:"Personal", title:"C# Game Server", description:"Game Server", bg:"url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')"},
        {type:["3D Model"], owner:"Personal", title:"Hello World", description:"3D Model Project", bg:"url('https://cdnb.artstation.com/p/assets/images/images/054/498/103/large/keith-lau-helloworld.jpg?1664694884')"},
        {type:["3D Model"], owner:"Personal", title:"Lowploy Room", description:"3D Model Project", bg:"url('https://cdna.artstation.com/p/assets/images/images/054/497/918/large/keith-lau-cozyroompartice.jpg?1664694302')"},
        {type:["Website"], owner:"Personal", title:"Portfolio", description:"Website", bg:"url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')"},
      ];

    
    return (<div className="grid gap-x-6 gap-y-6 lg:gap-xl-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                projects.map((item,index)=>{
                    return <div className="mb-12 md:mb-0">
                      <ProjectCard 
                      title={item.title} 
                      description={item.description}
                      bg={item.bg}
                      owner={item.owner}
                      type={item.type}
                      subType={item?.subType}
                      duty={item.duty}
                      />
                    </div>
                })
            }
    </div>);
}

{/*
<div class="grid gap-x-6 gap-y-6 lg:gap-xl-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="mb-12 md:mb-0">
              <ProjectCard 
              title="Dungeon Challenger" 
              description="Undergrad Final Year Project" 
              bg="url('https://keithlau2015.github.io/portfolio/dc.png')"/>
              <div class="group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')]
                hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')]
              ">
                
                
                <div class="text-base font-bold text-white">Dungeon Challenger</div>
                <div class="text-xs text-white pb-5">Undergrad Final Year Project</div>
              
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
*/}
export default ProjectSection;
