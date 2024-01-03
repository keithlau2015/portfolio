import { OneCareer } from "./oneCareer";

export const workingExpEvents = [
    {eventName:"Nexify Limited", range:"1/2024 - Current", details:"Analyst Programmer"},
    {eventName:"Kepro Solutions Limited", range:"12/2022 - 12/2023", details:"Analyst Programmer"},
    //{eventName:"Dream Global Entertainment Limited", range:"07/2020 - 09/2022", details:"Cocos Game Development Engineer"},
    {eventName:"Gameone Group Limited", range:"06/2020 - 07/2022", details:"Senior Programmer"},
    {eventName:"Graduate from Tamkang University", range:"09/2016 - 06/2020", details:"Innovative Information and Technology Department"}
];

export function CareerSection({gotoCB}) {
    return (<ol className="relative ml-20 border-l border-gray-200 dark:border-gray-700">     
        {
            workingExpEvents.map((item,index)=>{
                return <li key={item.eventName} className="mb-10 ml-10">
                <OneCareer 
                    gotoCB={gotoCB}
                    eventName={item.eventName}
                    range={item.range}
                    details={item.details}
                    index={index}
                />
                </li>
            })
        }
  </ol>);
}

export default CareerSection;