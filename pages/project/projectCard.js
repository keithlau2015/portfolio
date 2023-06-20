import Link from "next/link";
import { ProjectDetailsPopover } from "./projectDetails";

export function ProjectCard({title, description, bg, owner, type, subType, duty, tech, index, url}) {
    return (
            url!=""?
            <Link href={url} passHref={true}>
                <div class={`
                    group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover 
                    ${bg}
                `}>
                    <ProjectDetailsPopover owner={owner} type={type} subType={subType} duty={duty} tech={tech} index={index}/>
                    <div class="text-base font-bold text-white">{title ? title : 'Project Title'}</div>
                    <div class="text-xs text-white pb-5">{description ? description : 'Description'}</div>
                </div>
            </Link>
            :
            <div class={`
                group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover 
                ${bg}
            `}>
                <ProjectDetailsPopover owner={owner} type={type} subType={subType} duty={duty} tech={tech} index={index}/>
                <div class="text-base font-bold text-white">{title ? title : 'Project Title'}</div>
                <div class="text-xs text-white pb-5">{description ? description : 'Description'}</div>
            </div>
    );
}
 export default ProjectCard;
