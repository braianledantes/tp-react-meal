import { useTranslation } from 'react-i18next';
import { Search as SearchIcon, X as ClearIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Search({ searchTerm, onSearch }) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(searchTerm);
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => clearTimeout(handler);
  }, [inputValue]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch('');
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex justify-center items-center w-full max-w-lg rounded-3xl p-1 gap-2" style={{ border: `2px solid var(--color-cocoa)` }} >
        <SearchIcon className="text-black ml-2" style={{ color: 'var(--color-cocoa)' }} />
        <input
          type="text"
          placeholder={t('search-placholder')}
          value={inputValue}
          onChange={handleChange}
          className="custom-placeholder bg-transparent border-none outline-none px-4 py-2 text-base text-black w-full max-w-lg rounded-full"
        />
        {inputValue && (
          <button
            onClick={handleClear}
            className="text-black p-1 rounded-full hover:bg-orange-200 hover:bg-opacity-50 mr-1"
            aria-label={t('clear-search')}
          >
            <ClearIcon style={{ color: 'var(--color-cocoa)' }} />
          </button>
        )}
      </div>
    </div>
  );
}