import Link from 'next/link';
import { useAppSelector, } from '../../lib/store/hooks';
const Navbar = () => {
    const items = useAppSelector((state) => state.cart.items);
    return (
        <nav className="navbar">
            <ul className="navList">
                <li>
                    <Link href="/">Home</Link>
                </li>
               
                <li>
                    <Link href="/cart">Cart management</Link>
                </li>
                <li>
                    <Link href="/show-cart">show cart({items.length})</Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
