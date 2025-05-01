import { useState, useEffect } from 'react';

export default function Dropdown({ id, label, value, options, defaultOption, onChange, isOpen, setOpenDropdown, className = '' }) {

  const [internalOpen, setInternalOpen] = useState(false);
  const visible = typeof isOpen === 'boolean' ? isOpen : internalOpen;

  useEffect(() => {
    if (typeof isOpen !== 'boolean') setInternalOpen(false);
  }, [value]);

  const handleSelect = (val) => {
    onChange(val);
    if (setOpenDropdown) {
      setOpenDropdown(null);
    } else {
      setInternalOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (setOpenDropdown) {
      setOpenDropdown(visible ? null : id);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  const isObjOptions = typeof options[0] === 'object';

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full bg-transparent border-none shadow-none focus:outline-none"
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
            className="px-4 py-2 bg-white text-black hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect(isObjOptions ? option.value : option)}
          >
            {isObjOptions ? option.label : option}
          </li>
        ))}
      </ul>
    </div>
  );
}