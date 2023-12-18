const ShoppingCard = ({ product }) => {
  return (
    <div className=" bg-white rounded-md  shadow-2xl">
      <img src={product.image} alt="product" className="h-[200px] w-full object-cover rounded-t-md" />
      <div className="space-y-2 p-2 text-gray-800">
        <h4 className="bg-green-400 px-2 rounded w-fit">{product.name}</h4>
        <h5 className="bg-yellow-300 px-2 wonded w-fit">$ {product.price}</h5>
        <button className="bg-purple-400 rounded px-2">Add to card</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
