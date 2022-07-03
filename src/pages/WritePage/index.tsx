import Layout from "components/Basic/Layout/index";
import { SideBar } from "components/Sidebar";
import Placeholder from "components/Basic/Placeholder";
import NewEntry from "components/NewEntry";
import { useSelector } from "react-redux";


const  WritePage = () => {
      const user = useSelector((state: any) => state.user);

  return (
    <Layout
      left={<SideBar user={user} />}
      right={<NewEntry />}
      footer={<Placeholder />}
    />
  );
}

export default WritePage;

