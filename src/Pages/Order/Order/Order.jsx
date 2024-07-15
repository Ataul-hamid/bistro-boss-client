import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  const categories=['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
 
  const desserts = menu.filter((item) => item.category == "dessert");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const pizza = menu.filter((item) => item.category == "pizza");
  const drinks = menu.filter((item) => item.category == "drinks");
  return (
    <div>
       <Helmet>
        <title>Alvi's Restauran | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
        {
          salad.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>


        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
        {
          pizza.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
        {
          soup.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
        {
          desserts.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
        {
          drinks.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
/* 
import FoodCard from '../../../Components/FoodCard/FoodCard';

const orderTab = ({items}) => {
    return (
        
    );
};

export default orderTab; */