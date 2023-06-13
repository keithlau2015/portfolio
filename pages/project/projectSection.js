import {ProjectCard} from './projectCard'

export function ProjectSection() {
    const projects = [
        {type:["Game"], subType:["PC"], owner:"Personal", title:"Dungeon Challenger", description:"Undergrad Final Year Project", bg:"url('https://keithlau2015.github.io/portfolio/dc.png')", duty:"My final year project. A singleplayer first person perspetive with random generated map game, player needed to handle monster, hunger and sanity to survive much level they can."},
        {type:["Game"], subType:["Moblie"],  owner:"Personal", title:"Space Shooter", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/spaceshooter.png')", duty:"My first moblie game, also a challenge for myself finished the game within 1 week. A singleplay 3rd person shooter game, player needed to control the spacecraft to fight obstacle, also player able to get reward through watching ads, and unlock more different playstle spacecraft."},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"正版龍虎門", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/dtg1.png')"},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"新火鳳燎原亂世英雄", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/fire.png')"},
        {type:["Game", "Server"], subType:["Moblie"], owner:"Gameone Group Limited", title:"龍虎門M", description:"Moblie game", bg:"url('https://keithlau2015.github.io/portfolio/dtg2.png')"},
        {type:["Game"], subType:["AR"], owner:"CIMPTech", title:"Mannings 50th Anniversary Event", description:"AR Game", bg:"url('https://keithlau2015.github.io/portfolio/manningsEvent.png')"},
        {type:["Application", "Website"], owner:"Karin Group", title:"Leisure and Cultural Services Department Electronic Collection Recording System", description:"Application", bg:"url('https://keithlau2015.github.io/portfolio/logolcsd.png')"},
        {type:["Application", "Website"], owner:"Karin Group", title:"Department of Health TACO Information System", description:"Application", bg:"url('https://keithlau2015.github.io/portfolio/DH_logo.png')"},
        {type:["DevTools"], owner:"Personal", title:"Editor Bootloader", description:"Unity Dev Tools", bg:"url('https://keithlau2015.github.io/portfolio/editorbootloader.png')"},
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
                    return <div key={item.title} className="mb-12 md:mb-0">
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
export default ProjectSection;
