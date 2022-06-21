import Layout from 'components/Basic/Layout/index'
import Placeholder from 'components/Basic/Placeholder';
import { FC } from 'react';

const LandingPage: FC = ( ) => {
    return(
        <Layout 
            left={<Placeholder/>} 
            right={<Placeholder/>} 
            footer={<Placeholder/>}
        />
    )
}

export default LandingPage;