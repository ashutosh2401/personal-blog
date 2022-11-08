import { Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h1>Peronal Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create blog</Link>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;