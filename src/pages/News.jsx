import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import RightSideNav from "../shared/RightSideNav";
import Nav from "../shared/Nav";


const News = () => {

    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                news detail
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
          
        </div>
    );
};

export default News;