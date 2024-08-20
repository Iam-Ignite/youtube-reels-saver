import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent relative z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-xl md:text-2xl text-white font-bold" role="heading" aria-level="1">
          <a href="/" aria-label="VideoMax - Home">
            VideoMax
          </a>
        </div>
        <nav aria-label="Language Selector">
          <label htmlFor="language-select" className="sr-only">
            Select Language
          </label>
          <select id="language-select" aria-label="Select Language">
            <option value="en">English</option>
            {/* Add more languages as needed */}
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
