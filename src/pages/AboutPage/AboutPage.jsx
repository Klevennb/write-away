import React from 'react'
import EntryList from '../../components/EntryList/EntryList'
import Layout from "../../components/Basic/Layout/index";


export const AboutPage = () => {  //This will all be moved to Profile page
    return (
      <div>
        <Layout
          right={<EntryList type="user" />}
        />
      </div>
    );
}

export default AboutPage;