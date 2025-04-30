import React from 'react';
import { Link } from 'react-router';
import PATHS from '../../routes/paths';
import { Heart } from 'lucide-react';

const Header = () => {
    return (
      <header className="flex items-center justify-between header-goldenSugar text-white p-4 sticky top-0 z-40 shadow-md">
        <h1 className="text-3xl font-bold"><Link to={PATHS.HOME}>🍪</Link></h1>
        <div className=" leading-tight">
          <h1 className="nunito-sans text-2xl ml-7" >My Honey</h1>
          <h1 className="pinyon-script-regular  text-4xl">Bakery </h1>
        </div>
        <nav >
            <ul className="flex gap-4">
                <li><Link to={PATHS.FAVORITES}><Heart /></Link></li>
                <li className="bg-white text-amber-700 px-4 py-2 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors duration-300"><Link to={PATHS.HOME}>Idioma</Link></li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;