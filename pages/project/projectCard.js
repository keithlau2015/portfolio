import { ProjectDetailsPopover } from "./projectDetails";
export function ProjectCard({title, description, bg, owner, type, subType, duty}) {
    return (<div className={`
        group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover 
        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),${bg}] 
        hover:bg-[linear-gradient(to_bottom,rgba(253,230,138,0.1),rgba(120,53,15,0.9)),${bg}]
    `}>
        <ProjectDetailsPopover owner={owner} type={type} subType={subType} duty={duty} />
        <div className="text-base font-bold text-white">{title ? title : 'Project Title'}</div>
        <div className="text-xs text-white pb-5">{description ? description : 'Description'}</div>
    </div>);
}
 export default ProjectCard;
