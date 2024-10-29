import { useAppDispatch } from '../../lib/store/hooks';
import { addItem } from '../../lib/store/features/cart/cartSlice';
interface Product{
   id:number;
   name:string;
   price:number
}
const products_items:Product[] = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 150 },
];

const Products_items = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product:Product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <center>
        <div>
     
     <h1>Products</h1>
     <ul>
       {products_items.map(product => (
         <li key={product.id}>
           <span>{product.name}</span>
           <br />
           <span>price-${product.price}</span>
           <br />
           <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
         <br /> <br />
         </li>
         
       ))}
     
     </ul>
   </div>
    </center>
  
  );
};

export default Products_items;
