import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Items"></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pb-20 pt-12 px-36">
            <div >
                <img src={featuredImg}/>
            </div>
            <div className="md:ml-10">
                <p>
                    Aug 20, 2029
                </p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic voluptas facilis velit corporis harum, commodi, similique odio voluptatem accusantium beatae. Nulla, enim quibusdam rem quasi adipisci odit quia accusantium. Aut illo saepe ratione praesentium reiciendis nam. Animi, voluptas quidem consectetur maiores iure excepturi dignissimos ducimus, ab vero repudiandae dicta.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-gray">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;