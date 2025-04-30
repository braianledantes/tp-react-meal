import { useTranslation } from 'react-i18next';
import styles from './Search.module.css';
import { Search as SearchIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearch } from "../../context/SearchContext"

export default function Search() {

  const { t } = useTranslation();
  
  const { searchTerm, setSearchTerm } = useSearch();
  const [inputValue, setInputValue] = useState(searchTerm);  

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);  
  };
  return (
    <div className={styles.buscadorContenedor}  >
      <SearchIcon className={styles.SearchIcon} />
      <input
        type="text"
        placeholder={t('search-placholder')}
        value={inputValue}
        onChange={handleChange}
        className={styles.buscador}
      />
    </div>
  );
}