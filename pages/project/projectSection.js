import {ProjectCard} from './projectCard'
import {useState} from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';

const projects = [
  {
    type:["Game"], 
    subType:["PC"], 
    owner:"Final Year Project Team", 
    title:"Dungeon Challenger", 
    description:"Undergrad Final Year Project", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dc.png')]", 
    duty:"My final year project. A singleplayer first person perspetive with random generated map game, player needed to handle monster, hunger and sanity to survive much level they can.",
    tech:["Unity", "C#", "Blender"],
    url: ""
  },
  {
    type:["Game"], 
    subType:["Moblie"],  
    owner:"Personal", 
    title:"Space Shooter", 
    description:"Moblie game", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/spaceshooter.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/spaceshooter.png')]", 
    duty:"My first moblie game, also a challenge for myself finished the game within 1 week. A singleplay 3rd person shooter game, player needed to control the spacecraft to fight obstacle, also player able to get reward through watching ads, and unlock more different playstle spacecraft.",
    tech:["Unity", "C#", "Blender"],
    url:"https://play.google.com/store/apps/details?id=com.Keith.SpaceShooter"
  },
  {
    type:["Game", "Server"], 
    subType:["Moblie"], 
    owner:"Gameone Group Limited", 
    title:"正版龍虎門",
    description:"Moblie game", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dtg1.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dtg1.png')]", 
    duty:"Responsible to maintain the server side & the client side, also responsible continuous the development, enchancement cooperate designer and artist of this game. In this project, I learn most of the game client-server concept, the game system either the server side and client side and building games for android and ios.",
    tech:["Unity", "C#", "Java", "MySQL"],
    url: ""
  },
  {
    type:["Game", "Server"], 
    subType:["Moblie"], 
    owner:"Gameone Group Limited", 
    title:"新火鳳燎原亂世英雄",
    description:"Moblie game", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/fire.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/fire.png')]", 
    duty:"Responsible to maintain the server side & the client side, also responsible continuous the development, enchancement, patching cooperate designer and artist of this game. In this project I learn alot about hows the patching system work(hotfix in other word) in moblie game and get more known about unity assetsbundle.",
    tech:["Unity", "Lua", "C#", "Java", "Python", "MySQL"],
    url:"https://play.google.com/store/apps/details?id=com.gameone.rtp3d&hl=zh_HK&gl=US"
  },
  {
    type:["Game", "Server"], 
    subType:["Moblie"], 
    owner:"Gameone Group Limited", 
    title:"龍虎門M", 
    description:"Moblie game", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/dtg2.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/dtg2.png')]", 
    duty:"Responsible to development the client side of this game, debugging, optimization, upgrading unity version. This project I get invoking develop a new game, and I get known more about the flow of game development",
    tech:["Unity", "Lua", "C#"],
    url:"https://play.google.com/store/apps/details?id=com.gameone.dthm2&hl=zh_HK&gl=US"
  },
  {
    type:["Game"], 
    subType:["AR"], 
    owner:"CIMPTech", 
    title:"Mannings 50th Anniversary Event",
    description:"AR Game", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/manningsEvent.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/manningsEvent.png')]",
    duty:"I as a freenlancer to develop a ar game for Mannings 50th Anniversary Event. This project I learn a lot of developmnet of ar game, also cooperate with installation to finish",
    tech:["Unity", "C#"],
    url:"https://www.mannings.com.hk/50th_Anniversary"
  },
  {
    type:["Application", "Website"], 
    owner:"Karin Group", 
    title:"Leisure and Cultural Services Department Electronic Collection Recording System", 
    description:"Application", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/logolcsd.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/logolcsd.png')]", 
    duty:"Invoke a part of develop of Electronic Collection Recording System for Leisure and Cultural Services Department, using Java, framework struts2. Learning a lot of mordern webapplication development",
    tech:["Java", "MySQL", "Js"],
    url: ""
  },
  {
    type:["Application", "Website"], 
    owner:"Karin Group", 
    title:"Department of Health TACO Information System", 
    description:"Application", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/DH_logo.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/DH_logo.png')]",
    duty:"Invoke a part of develop of Information System for Department of Health TACO, using Java, framework Groovy. Learning a lot of mordern webapplication development",
    tech:["Java", "MySQL", "Js"],
    url: ""
  },
  {
    type:["Utilities"], 
    owner:"Personal", 
    title:"Editor Bootloader", 
    description:"Unity Utilities",
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/editorbootloader.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/editorbootloader.png')]",
    duty:"A Tool for lazy developers(me) who always for get to switch back the init scene while entering the play mode in unity. This project is develop for just one purpose, in unity while enter play mode, will auto load your init scene.",
    tech:["C#", "Unity"],
    url:"https://github.com/keithlau2015/EditorBootloader"
  },
  {
    type:["Utilities"], 
    owner:"Personal", 
    title:"Bug Report System", 
    description:"Unity Utilities", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://raw.githubusercontent.com/keithlau2015/BugReportSystem/main/image/sample_result_2.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://raw.githubusercontent.com/keithlau2015/BugReportSystem/main/image/sample_result_2.png')]",
    duty:"A Tool for any game developers searching a way to manage bug reports. The project integrated with trello, and whenever you send the bug report, will auto open a card in your trello board. At the future may support more platform like Google or notion",
    tech:["C#", "Unity"],
    url:"https://github.com/keithlau2015/BugReportSystem"
  },
  {
    type:["Game"], 
    subType:["PC"], 
    owner:"Teamed with ex-colleague", 
    title:"Sky Garden", 
    description:"On Going Game Project", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]",
    duty:"I teamed up with ex-colleague. The project still in development, is a RTS singleplayer game",
    tech:["C#", "Unity"],
    url: ""
  },
  {
    type:["Game"], 
    subType:["PC", "Moblie"], 
    owner:"Personal", 
    title:"Druid", 
    description:"On Going Game Project", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]",
    duty:"This is a solo game project, still in development",
    tech:["C#", "Unity", "Blender"],
    url: ""
  },
  {
    type:["Game", "Server"], 
    owner:"Personal", 
    title:"C# Game Server", 
    description:"Game Server",
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/gameserver.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/gameserver.png')]",
    duty:"The is a game server project, which I after learn the server side knowledge from Gameone. I wanted to start to code my own game server base.",
    tech:["C#"],
    url: "https://github.com/keithlau2015/CSharp_ServerBase"
  },
  {
    type:["3D Model"], 
    owner:"Personal", 
    title:"Hello World", 
    description:"3D Model Project",
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://cdnb.artstation.com/p/assets/images/images/054/498/103/large/keith-lau-helloworld.jpg?1664694884')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://cdnb.artstation.com/p/assets/images/images/054/498/103/large/keith-lau-helloworld.jpg?1664694884')]",
    duty:"The 3D model project is I following the youtube tutorial to get learn about the basic of blender, and how to render a image in blender",
    tech:["Blender"],
    url:"https://www.artstation.com/artwork/lRW4NO"
  },
  {
    type:["3D Model"], 
    owner:"Personal", 
    title:"Lowploy Room", 
    description:"3D Model Project", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://cdna.artstation.com/p/assets/images/images/054/497/918/large/keith-lau-cozyroompartice.jpg?1664694302')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://cdna.artstation.com/p/assets/images/images/054/497/918/large/keith-lau-cozyroompartice.jpg?1664694302')]",
    duty:"The 3D model project is for myself to get known more about 3D modeling process, and also learning the lighting and simple render skills",
    tech:["Blender"],
    url:"https://www.artstation.com/artwork/vJqd43"
  },
  {
    type:["Website"], 
    owner:"Personal", 
    title:"Portfolio", 
    description:"Website", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://keithlau2015.github.io/portfolio/portfolioweb.png')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://keithlau2015.github.io/portfolio/portfolioweb.png')]",
    duty:"A portfolio website for myself. Display or record the skills I learn and used in which jobs.",
    tech:["Nodejs", "Js", "Tailwind"],
    url:"https://keithlau2015.github.io/portfolio/"
  },
  {
    type:["Application"], 
    owner:"Personal", 
    title:"Social Media Management Tools", 
    description:"Application", 
    bg:"bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')] hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),url('https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1686197758~exp=1686198358~hmac=9043f879a1201e7eac5e3a0e683c4871c0f68e08bde338c20ade3bb082775a73')]",
    duty:"Create for managing various social media platform, like post the same post to various social media platform in one click, and dashboard for integrate all social media data for analysis",
    tech:["Flutter", "Dart"],
    url:""
  },
];

const projectFilters = ["Game", "Website", "Application", "Server", "3D Model", "Utilities"]

export function ProjectSection({filter, clearFilterCB}) {
  const [projectFilter, setProjectFilter] = useState(filter);

  if(filter != undefined && projectFilter != filter)
  {
    setProjectFilter(filter);
  }

  const handleClickFilter = (_filter) => {
    setProjectFilter(_filter);
    if(clearFilterCB != null || clearFilterCB != undefined)
      clearFilterCB();
  }

  const ProjectTabBar = () => (
    <div className="mb-5 flex flex-row max-lg:flex-col items-center justify-evenly" style={{ transition: "all .5s ease 0s" }}>
        {
            [
                <button className={`mx-3 my-3 bg-amber-500 hover:bg-amber-700 text-white font-bold rounded-full py-1 px-1 min-w-[120px] min-h-[40px] max-lg:min-w-[600px] max-md:min-w-[300px]`} onClick={() => handleClickFilter(undefined)}>
                    <div className={` project-tab-bar-tab-text`}>
                        ALL
                    </div>
                </button>,
  
                projectFilters.map(type => (
                    <button className={`mx-3 my-3 bg-amber-500 hover:bg-amber-700 text-white font-bold rounded-full py-1 px-1 min-w-[120px] min-h-[40px] max-lg:min-w-[600px] max-md:min-w-[300px]`} onClick={() => handleClickFilter(type)}>
                        <div className={`project-tab-bar-tab-text`}>
                            {type.toUpperCase()}
                        </div>
                    </button>
                ))
            ]
        }
    </div>
  )
  
  let projectCrads = []
  Object.entries(projects).filter(([index, project]) => { 
    return (project.type.includes(projectFilter) || project.owner == projectFilter || projectFilter === undefined) 
  }).forEach((project, index) => {
    projectCrads.push(
      <Flipped flipId={project[1].title}>
        <div key={project[1].title} className="mb-12 md:mb-0">
          <ProjectCard
            title={project[1].title} 
            description={project[1].description}
            bg={project[1].bg}
            owner={project[1].owner}
            type={project[1].type}
            subType={project[1]?.subType}
            duty={project[1].duty}
            tech={project[1]?.tech}
            index={parseInt(index)}
            url={project[1].url}
          />
        </div>
      </Flipped>
    );
  })

  return (<>
      <ProjectTabBar />
      <Flipper flipKey={projectFilter}>
        <div className="grid gap-x-6 gap-y-6 lg:gap-xl-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            projectCrads
          }
        </div>
      </Flipper>
  </>);
}

export default ProjectSection;
