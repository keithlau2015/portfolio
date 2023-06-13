import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faGamepad,
  faRocket,
  faServer,
  faToolbox,
  faVrCardboard,
  faComputer,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export function ProjectDetailsPopover({owner, type, subType, duty, tech}){
    return <span class={`min-w-[250px] absolute scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100`}>
      <div class="text-base font-bold">Project Owner:</div>
      <div class="text-sm text-slate-300">{owner}</div>
      <div class="my-1 container overflow-hidden bg-fixed bg-slate-900">
        <div class="mb-2 divide-y-2 divide-slate-700">
          <div class="my-1 text-slate-300">Category</div>
          <div class=""></div>
        </div>
        <ul class="mb-1 mx-auto flex list-inside justify-center">
            {
              type?.includes("Game") 
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faGamepad} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
            {
              type?.includes("Website") 
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
            {
              type?.includes("3D Model")
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faPalette} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
            {
              type?.includes("Application")
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faRocket} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
            {
              type?.includes("Server")
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faServer} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
            {
              type?.includes("DevTools")
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faToolbox} style={{ fontSize: 20, color: 'rgb(252,211,77)'}}/>
              </a>
            }
        </ul>
        <ul className="mb-1 mx-auto flex list-inside justify-center">
            {
              subType?.includes("Moblie") 
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faMobileScreenButton} style={{ fontSize: 10, color: 'rgb(203,213,225)'}}/>
              </a>
            }
            {
              subType?.includes("PC") 
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faComputer} style={{ fontSize: 10, color: 'rgb(203,213,225)'}}/>
              </a>
            }
            {
              subType?.includes("VR") || subType?.includes("AR") 
              &&
              <a href="#!" class="px-2">
                <FontAwesomeIcon icon={faVrCardboard} style={{ fontSize: 10, color: 'rgb(203,213,225)'}}/>
              </a>
            }
        </ul>
        {
          duty!=null &&
          <div>
            <div class="mb-2 divide-y-2 divide-slate-700">
              <div class=""></div>
              <div class=""></div>
            </div>
            <div className="ml-3 my-1 text-left text-slate-300">{duty}</div>
          </div>
        }
        <ul class="mb-1 mx-auto flex list-inside justify-center">
            {
              tech?.includes("C#") 
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/c-sharp-c.svg')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
            {
              tech?.includes("Java") 
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/java_logo.png')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
            {
              tech?.includes("Unity")
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/unity.png')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
            {
              tech?.includes("MySQL")
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/mysql_logo.png')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
            {
              tech?.includes("LUA")
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/Lua-Logo.svg')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
            {
              tech?.includes("Python")
              &&
              <div className="h-30 w-30 relative">
                <Image
                  src="url('https://keithlau2015.github.io/portfolio/Python-logo.svg.png')"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            }
        </ul>
      </div>
    </span>
}
export default ProjectDetailsPopover;
