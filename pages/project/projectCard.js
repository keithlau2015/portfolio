import { ProjectDetailsPopover } from "./projectDetails";
import { useRouter } from 'next/router';
import Link from "next/link";

export function ProjectCard({title, description, bg, index}) {
    return (<>
        <Link href={{ pathname: '/project/projectDetailsPage/', query: { index: index } }}>
            <div className={`
                group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover 
                ${bg}
            `}>
                {/* <ProjectDetailsPopover owner={owner} type={type} subType={subType} duty={duty} tech={tech} index={index}/> */}
                <div className="text-base font-bold text-white">{title ? title : 'Project Title'}</div>
                <div className="text-xs text-white pb-5">{description ? description : 'Description'}</div>
            </div>
        </Link>
    </>);
}
 export default ProjectCard;
