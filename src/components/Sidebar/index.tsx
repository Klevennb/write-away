import { useHistory } from "react-router-dom";
import { Container, UserDetails } from "./styles";
import { UserType } from "constants/models";

interface SideBarProps {
    user: UserType;
}

export const SideBar = (props: SideBarProps) => {
    const { user }= props;
    const history = useHistory()
    const navigateToProfile = () =>{
        history.push('/profile')
    }
    return (
        <Container>
            <UserDetails>
                <text onClick={navigateToProfile}>{user?.username}</text>
                <text>{user?.current_streak || 0}</text>
                <text>Goal: {user?.word_goal || 'todo'}</text>
            </UserDetails>
        </Container>
     );
}
