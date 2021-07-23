import React from 'react'
import { useSelector } from 'react-redux'

export const EditEntryPage = (props) => {
        const entries = useSelector((state) => state.entries);

    return <div>{JSON.stringify(entries)}</div>;
}



export default EditEntryPage
