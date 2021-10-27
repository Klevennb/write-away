import React from 'react'
import EntryList from '../../components/EntryList/EntryList'

export const AboutPage = () => {  //This will all be moved to Profile page
    return (
        <div>
            <EntryList type='user' />
        </div>
    )
}

export default AboutPage;