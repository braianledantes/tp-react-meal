import React from 'react';
import Search from '../Search/Search';

const Header = ({
    searchTerm,
    handleSearchChange,
  }) => {
    return (
      <header className="flex items-center justify-between bg-gray-200 p-4 sticky top-0">
        <h1 className="text-3xl font-bold">Recetas</h1>
        <div>
          <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <nav className="bg-gray-200">
            <ul className="flex gap-4">
                <li><a href="/">Inicio</a></li>
                <li><a href="/favorites">Favoritos</a></li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;