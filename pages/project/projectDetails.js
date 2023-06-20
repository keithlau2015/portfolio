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
                <FontAwesomeIcon icon={faGamepad} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px' }}/>
            }
            {
              type?.includes("Website") 
              &&
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              type?.includes("3D Model")
              &&
                <FontAwesomeIcon icon={faPalette} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              type?.includes("Application")
              &&
                <FontAwesomeIcon icon={faRocket} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              type?.includes("Server")
              &&
                <FontAwesomeIcon icon={faServer} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              type?.includes("Utilities")
              &&
              <FontAwesomeIcon icon={faToolbox} style={{ fontSize: 20, color: 'rgb(252,211,77)', padding: '0px 2px 0px 2px'}}/>
            }
        </ul>
        <ul className="mb-1 justify-center">
            {
              subType?.includes("Moblie") 
              &&
              <FontAwesomeIcon icon={faMobileScreenButton} style={{ fontSize: 10, color: 'rgb(203,213,225)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              subType?.includes("PC") 
              &&
              <FontAwesomeIcon icon={faComputer} style={{ fontSize: 10, color: 'rgb(203,213,225)', padding: '0px 2px 0px 2px'}}/>
            }
            {
              subType?.includes("VR") || subType?.includes("AR") 
              &&
              <FontAwesomeIcon icon={faVrCardboard} style={{ fontSize: 10, color: 'rgb(203,213,225)', padding: '0px 2px 0px 2px'}}/>
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
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
                  alt="icon"
                />
              </div>
            }
        </ul>
      </div>
    </span>
  </>
}
export default ProjectDetailsPopover;
