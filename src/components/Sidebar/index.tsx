import { useHistory } from "react-router-dom";
import { Container, UserDetails } from "./styles";

interface SideBarProps {
    user: any
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
                <text>{user?.currentStreak || 0}</text>
                <text>Goal: {user?.word_goal || 'todo'}</text>
            </UserDetails>
        </Container>
     );
}
