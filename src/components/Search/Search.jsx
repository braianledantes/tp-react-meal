import { useTranslation } from 'react-i18next';
import styles from './Search.module.css';
import { Search as SearchIcon } from 'lucide-react';

export default function Search({ searchTerm, onSearchChange }) {
  const { t } = useTranslation();

  return (
    <div className={styles.buscadorContenedor}  >
      <SearchIcon className={styles.SearchIcon} />
      <input
        type="text"
        placeholder={t('search-placholder')}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.buscador}
      />
    </div>
  );
}

{/**No anda como tal, solo copie y pegue de mi tp */}
