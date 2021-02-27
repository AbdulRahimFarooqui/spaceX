import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql'
//Yahan say pass karo flight_number NowCallThis ko aur wahan say
//index.tsx ko id bana k jis tarah wo tutorial main hua hua hai


interface OwnProps {
    data: MissionsInfoQuery
    setId(id:React.SetStateAction<number> |number | null | undefined):void
}

const MissionList = ({ data, setId }:OwnProps) => {
    
    return (
        <div className="Name-container">
            <div className="heading-mission-name"><u>MISSION NAMES:</u></div>
            <ul className="MissionName">
                {data.launches?.map((launchObj,ind)=>{
                    return (
                        <li key={ind} className="MissionNameContainer" onClick={()=>setId(launchObj?.flight_number)}>
                            <p className="p-missionName">{launchObj?.mission_name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MissionList;