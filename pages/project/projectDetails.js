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
import Image from 'next/image';

export function ProjectDetailsPopover({owner, type, subType, duty, tech, index}){
  return <>
    <span
      class={`backdrop-blur-sm min-w-[250px] absolute bottom-1 scale-0 transition-all rounded bg-gray-800 bg-opacity-80 p-2 text-xs text-white group-hover:scale-100`}>
      <div class="text-base font-bold">Project Owner:</div>
      <div class="text-sm text-slate-300">{owner}</div>
      <div class="my-1 container overflow-hidden bg-fixed bg-slate-900 bg-opacity-70">
        <div class="mb-2 divide-y-2 divide-slate-700">
          <div class="my-1 text-slate-300">Category</div>
          <div class=""></div>
        </div>
        <ul class="mb-1 justify-center">
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
        <ul className="mb-1 justify-center">
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
        <div class="mt-2 divide-y-2 divide-slate-700">
          <div class=""></div>
          <div class="mt-2 text-slate-300">Tech</div>
        </div>
        <ul class="mb-2 mx-auto flex list-inside justify-center">
            {
              tech?.includes("C#") 
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-c-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Java") 
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-java-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Unity")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-unity-48.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("MySQL")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-mysql-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Lua")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-lua-language-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Python")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-python-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Blender")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-blender-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Nodejs")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-nodejs-32.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Js")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-javascript-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Tailwind")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-tailwindcss-48.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Dart")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-dart-50.png"
                  fill="true"
                />
              </div>
            }
            {
              tech?.includes("Flutter")
              &&
              <div className="h-[20px] w-[20px] relative mr-1 ml-1">
                <Image
                  src="https://keithlau2015.github.io/portfolio/icons8-flutter-50.png"
                  fill="true"
                />
              </div>
            }
        </ul>
      </div>
    </span>
  </>
}
export default ProjectDetailsPopover;
