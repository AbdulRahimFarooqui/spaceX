import React, { useEffect, useState } from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'
import './styles.css'

interface Props {
    data: LaunchMissionInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {
    delete data.__typename
    // data.launch?.details
    // data.launch?.launch_site
    // data.launch?.launch_success
    // data.launch?.launch_year
    // data.launch?.links
    // data.launch?.mission_name
    // data.launch?.rocket
    const cleansenedData1 = {
        details: data.launch?.details,
        images_links: data.launch?.links?.flickr_images,
    }
    const cleansenedData = {
        mission_name: data.launch?.mission_name,
        launch_success: data.launch?.launch_success,
        launch_year: data.launch?.launch_year,
        launch_site: data.launch?.launch_site?.site_name,
        rocket_name: data.launch?.rocket?.rocket_name,
        rocket_type: data.launch?.rocket?.rocket_type,
    }
    let [sentence, setSent] = useState("");
    useEffect(() => {
        if (cleansenedData.launch_success) {
            setSent("The Rocket, " + cleansenedData.rocket_name + " of type " + cleansenedData.rocket_type + ", launched from " + cleansenedData.launch_site + " in year " + cleansenedData.launch_year + " and was successful.");
        }
        else {
            setSent("The Rocket, " + cleansenedData.rocket_name + " of type " + cleansenedData.rocket_type + ", launched from " + cleansenedData.launch_site + " in year " + cleansenedData.launch_year + " but was not  successful.");
        }
    }, [cleansenedData.launch_success, cleansenedData.rocket_name, cleansenedData.rocket_type, cleansenedData.launch_site, cleansenedData.launch_year])

    return (
        <div className="Details-display">
            <div className="values-display">
                <div className="heading">
                    <u>{cleansenedData.mission_name}</u>
                </div>
                {sentence}
                <hr/>
                {Object.values(cleansenedData1).map((val: any, ind: number) => {

                    if ((val !== null) && ((ind > 0))) {
                        return (
                            val.map((val1: string, ind1: number) => {
                                return (
                                    <div>
                                        <img width={500} src={val1} alt={`The Images of the Rocket ${cleansenedData.rocket_name} were not found.`} />
                                    </div>
                                )
                            })
                        )
                    }
                    else if ((val === []) && ((ind > 0))) {
                        return(
                        <div>
                            Sorry, No Image Found For The Rocket {cleansenedData.rocket_name}
                        </div>)
                    }
                    else if ((val !== null) && (ind === 0)) {
                        return (
                            <div className="values">
                                {val}
                            </div>
                        )
                    }
                    else {
                        console.log("val",val)
                        return (<div>
                            More Public Record Found Not Found For The Mission {cleansenedData.mission_name}
                        </div>)
                    }
                })}
            </div>
            <h1>{cleansenedData.launch_success}</h1>
        </div>
    )
}

export default MissionInfo;