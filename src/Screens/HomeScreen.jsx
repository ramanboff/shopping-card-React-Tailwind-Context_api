import ShoppingCard from "../Components/ShoppingCard.jsx";
import data from "../data.jsx";
const HomeScreen = () => {
  return (
    <div>
      {data.map((product) => (
        <ShoppingCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
