import React from 'react';
import { Link } from 'react-router';
import PATHS from '../../routes/paths';
import { Heart } from 'lucide-react';

const Header = () => {
    return (
      <header className="flex items-center justify-between bg-amber-700 text-white p-4 sticky top-0 z-40 shadow-md">
        <h1 className="text-3xl font-bold"><Link to={PATHS.HOME}>🍪</Link></h1>
        <div>
          <h1>Atomic's Bakery</h1>
        </div>
        <nav >
            <ul className="flex gap-4">
                <li><Link to={PATHS.FAVORITES}><Heart /></Link></li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;