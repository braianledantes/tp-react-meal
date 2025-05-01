import React from 'react';
import { Link } from 'react-router';
import PATHS from '../../routes/paths';
import { Heart, Languages} from 'lucide-react';
import Dropdown from '../Dropdown/Dropdown';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage); 
  };


  return (
    <header className="flex items-center justify-between bg-goldenSugar text-white p-4 sticky top-0 z-40 shadow-md">
        <h1 className="text-3xl font-bold"><Link to={PATHS.HOME}><img src="/medialuna.png" alt="Logo" className="w-10 h-10 object-contain" /></Link></h1>
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
            defaultOption={<Languages className="w-5 h-5" color={i18n.language === "en" ? "#a0552c" : "white"} />}
            options={[
              { label: t("lang-spanish"), value: "es" },
              { label: t("lang-english"), value: "en" },
            ]}
            onChange={handleLanguageChange}
            className="bg-transparent text-black p-0 m-0"
          />
        </nav>
      </header>
    );
  };
  
export default Header;