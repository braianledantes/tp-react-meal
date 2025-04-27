import styles from './Search.module.css';
import { Search as SearchIcon } from 'lucide-react';

export default function Search({ searchTerm, onSearchChange }) {
  return (
    <div className={styles.buscadorContenedor}  >
      <SearchIcon className={styles.SearchIcon} />
      <input
        type="text"
        placeholder="Buscar postrecito ñom ñom"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.buscador}
      />
    </div>
  );
}

{/**No anda como tal, solo copie y pegue de mi tp */}
