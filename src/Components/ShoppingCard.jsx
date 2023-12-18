import Rating from "./Rating";

const ShoppingCard = ({ product }) => {
  return (
    <div className=" bg-white rounded-md  shadow-2xl">
      <img src={product.image} alt="product" className="h-[300px] w-full object-cover rounded-t-md sm:h-[170px]"  /> 
      <div className="space-y-1 p-2 text-gray-800">
        <h4 className="">{product.name}</h4>
        <h5 className="">$ {product.price}</h5>
        <div>
          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </div>
        <button className="bg-orange-400 rounded-full px-2 hover:text-white duration-200">Add to card</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
