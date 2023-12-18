const ShoppingCard = ({product}) => {
  return ( 
    <div>
      <img src={product.image} alt="product" />
    </div>
   );
}
 
export default ShoppingCard;