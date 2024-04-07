import { useLoaderData } from "react-router-dom";
import BreakingNews from "../breakingNews/BreakingNews";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Nav from "../shared/Nav";
import RightSideNav from "../shared/RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData()
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
           
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6  ">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 ">
                  {
                    news.map(aNews => <NewsCard
                    key={aNews.id}
                    news={aNews}
                    ></NewsCard>)
                  }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;