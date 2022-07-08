import Layout from "components/Basic/Layout/index";
import { SideBar } from "components/Sidebar";
import Placeholder from "components/Basic/Placeholder";
import NewEntry from "components/NewEntry";
import { useSelector, useDispatch } from "react-redux";


const  WritePage = () => {
      const user = useSelector((state: any) => state.user);
      const dispatch = useDispatch();

  return (
    <Layout
      left={<SideBar user={user} />}
      right={<NewEntry dispatch={dispatch}/>}
      footer={<Placeholder />}
    />
  );
}

export default WritePage;

