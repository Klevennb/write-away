import Layout from 'components/Basic/Layout/index'
import Placeholder from 'components/Basic/Placeholder';
import { FC } from 'react';
import { SideBar } from 'components/Sidebar';
import { useSelector } from 'react-redux';

const LandingPage: FC = ( ) => {
      const user = useSelector((state: any) => state.user);

    return(
        <Layout 
            left={<SideBar user={user}/>} 
            right={<Placeholder/>} 
            footer={<Placeholder/>}
        />
    )
}

export default LandingPage;