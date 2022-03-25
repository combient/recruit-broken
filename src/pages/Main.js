import { Link, Outlet } from 'react-router-dom';
import './Main.css';

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/countries">Countries</Link>
                    </li>
                    <li>
                        <Link to="/search-country">Search country</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {/* Page content goes here */}
                <Outlet />
            </main>
        </div>
    );
}

export default Home;
