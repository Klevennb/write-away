import { FC } from "react" 
import { StyledButton } from "components/LandingPageButtons/styles"
import { useHistory } from "react-router-dom";

const LandingPageButtons:FC = () => {

    
    const history = useHistory()
    const navigateToProfile = () =>{
        history.push('/write')
    }

    return (<StyledButton onClick={navigateToProfile}>Write!</StyledButton>
    )
}

export default LandingPageButtons