const ShoppingCard = ({ product }) => {
  return (
    <div className=" bg-gray-200">
      <img src={product.image} alt="product" className="h-[200px] w-full"  />
      <div className="space-y-2 p-2">
        <h4 className="bg-green-400 px-2 rounded w-fit">{product.name}</h4>
        <h5 className="bg-yellow-300 px-2 wonded w-fit">$ {product.price}</h5>
        <button className="bg-purple-400 rounded px-2">Add to card</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
