import { useAppSelector, useAppDispatch } from '../../lib/store/hooks';
import { removeItem, clearCart } from '../../lib/store/features/cart/cartSlice';

const Cart_items = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id:number) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <center>
      <h1>Your cart</h1>
       <div>
    
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
           <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      </div>
     
      
    )}
    <button onClick={handleClearCart}>Clear Cart</button>
  </div>
    </center>
   
  );
};

export default Cart_items;
