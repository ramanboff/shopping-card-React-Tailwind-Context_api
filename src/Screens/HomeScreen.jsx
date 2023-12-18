import ShoppingCard from "../Components/ShoppingCard.jsx";
import data from "../data.jsx";
const HomeScreen = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data.map((product) => (
        <ShoppingCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
