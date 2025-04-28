import React from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router';
import PATHS from '../../routes/paths';

const Header = ({
    searchTerm,
    handleSearchChange,
  }) => {
    return (
      <header className="flex items-center justify-between bg-amber-700 text-white p-4 sticky top-0">
        <h1 className="text-3xl font-bold"><Link to={PATHS.HOME}>Recetas</Link></h1>
        <div>
          <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <nav >
            <ul className="flex gap-4">
                <li><Link to={PATHS.HOME}>Inicio</Link></li>
                <li><Link to={PATHS.FAVORITES}>Favoritos</Link></li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;