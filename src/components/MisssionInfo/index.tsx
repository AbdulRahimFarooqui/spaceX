import React, { useEffect } from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql';
import MissionList from './MissionInfo';
import './styles.css';

interface Props {
    idInput: number
}

const MissionInfoContainer = ({ idInput }: Props) => {

    const { data, loading, error, refetch } = useLaunchMissionInfoQuery({
        variables: { id: idInput.toString() }
    });

    useEffect(() => { refetch() }, [refetch]);

    if (idInput === -1) {
        return(
            <div className="intro-div">
                SpaceX designs, manufactures and launches advanced rockets and spacecraft. 
                The company was founded in 2002 to revolutionize space technology, with 
                the ultimate goal of enabling people to live on other planets.
                Space Exploration Technologies Corp. is an American aerospace manufacturer
                and space transportation services company headquartered in Hawthorne, California. 
                It was founded in 2002 by Elon Musk with the goal of reducing space transportation 
                costs to enable the colonization of <b>Mars</b>.
                <hr/><br/>
                <br/>
                <br/>
                PLEASE SELECT A MISSION FROM<br/>THE LIST AT LEFT TO VIEW AVAILABLE DETAILS!
            </div>
        )
    }

    if (loading) {
        return null
    }

    if (error) {
        return null
    }

    if (!data) {
        return <h3>Waiting for click</h3>
    }

    return (
        <div className="Details-container">
            <MissionList data={data} />
        </div>
    )
}

export default MissionInfoContainer;