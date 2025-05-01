import React from 'react';
import { Link } from 'react-router';
import PATHS from '../../routes/paths';
import { Heart, Languages} from 'lucide-react';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
    return (
      <header className="flex items-center justify-between bg-goldenSugar text-white p-4 sticky top-0 z-40 shadow-md">
        <h1 className="text-3xl font-bold"><Link to={PATHS.HOME}>🍪</Link></h1>
        <div className=" leading-tight">
          <h1 className="font-nunito font-bold text-2xl ml-5" >My Honey</h1>
          <h1 className="font-pinyon text-4xl tracking-widest">Bakery </h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link to={PATHS.FAVORITES}><Heart /></Link>

          <Dropdown
            id="lang"
            label="Language"
            value=""
            defaultOption={<Languages className="w-5 h-5 text-white" />}
            options={[
              { label: 'Español', value: 'es' },
              { label: 'English', value: 'en' },
            ]}
            onChange={() => {}}
            className="bg-transparent text-black p-0 m-0"
          />
        </nav>
      </header>
    );
  };
  
  export default Header;