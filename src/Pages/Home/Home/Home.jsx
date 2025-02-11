import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Alvi's Menu | Home</title>
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
   
            
        </div>
    );
};

export default Home;