import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql'
import MissionList from './MissionList';

interface Props {
    setIdFunction(id: React.SetStateAction<number> | number | null | undefined): void
}

const MissionContainer = ({ setIdFunction }: Props) => {
    const { data, error, loading } = useMissionsInfoQuery();
    if (loading) {
        return (
            <h1 className="loading-heading">Loading All<br/>The SpaceX Mission<br/>Names...</h1>
        )
    }
    if (error || !data) {
        return <h3>An Error Has Occured While Retrieving <br/>Data For The SpaceX Mission</h3>
    }
    return (
        <MissionList data={data} setId={setIdFunction} />
    )
}

export default MissionContainer;