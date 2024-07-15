import FoodCard from '../../../Components/FoodCard/FoodCard';

const orderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
          items.map(item=> <FoodCard key={item} item={item}>

          </FoodCard>)
        }

      </div>
    );
};

export default orderTab;