import Image from 'next/image';

export function OneCareer({gotoCB, eventName, range, details, index}) {
   return (<div>
    <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white">
        <svg aria-hidden="true" className="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
    </span>    
    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{eventName?eventName:"Name"}
    {
        index==0 && 
        <span className="bg-amber-300 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Present</span>
    }
    </h3>
    <div className="pl-2 mb-2 h-[25px] w-[25px] relative transition duration-300 ease-in-out hover:scale-150">
        <Image
        onClick={gotoCB} goto="Projects" param={`${eventName}`}
        src="https://keithlau2015.github.io/portfolio/icons8-project-48.png"
        fill="true"
        alt={eventName}
        />
        <div className="pl-5 text-amber-300" onClick={gotoCB} goto="Projects" param={`${eventName}`}>PROJECTS</div>
    </div>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{range?range:"00/0000 - 00/0000"}</time>
    <p className="mb-4 text-base font-normal text-gray-500">{details?details:""}</p>
  </div>);
}

export default OneCareer;
