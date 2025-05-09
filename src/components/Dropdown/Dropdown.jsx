import { useState, useEffect } from 'react';

export default function Dropdown({ id, label, value, options, defaultOption, onChange, isOpen, setOpenDropdown, className = '' }) {

  const [internalOpen, setInternalOpen] = useState(false);
  const visible = typeof isOpen === 'boolean' ? isOpen : internalOpen;
  
  const handleSelect = (val) => {
    onChange(val);
    setInternalOpen(false); 
  };

  const toggleDropdown = () => {
    setInternalOpen((prev) => !prev); 
  };

  const isObjOptions = typeof options[0] === 'object';

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full bg-transparent border-none shadow-none focus:outline-none"
        aria-haspopup="true"
        aria-expanded={visible}
      >
        {value
          ? isObjOptions
            ? options.find((o) => o.value === value)?.label
            : value
          : defaultOption}
      </button>
  
      <ul
        className={`absolute left-0 mt-2 bg-white border border-gray-300 rounded-full shadow-md max-h-64 overflow-y-auto z-10 transform transition-all duration-300 origin-top text-sm ${
          visible
            ? 'opacity-100 scale-y-100'
            : 'opacity-0 scale-y-95 pointer-events-none'
        } left-[-50px] w-[80px] rounded-lg`}
      >
        {options.map((option, idx) => (
          <li
            key={idx}
            className="px-4 py-2 bg-white text-black hover:bg-[#d9ad794D] hover:text-[#a0552c] cursor-pointer"
            onClick={() => handleSelect(isObjOptions ? option.value : option)}
          >
            {isObjOptions ? option.label : option}
          </li>
        ))}
      </ul>
    </div>
  );
}