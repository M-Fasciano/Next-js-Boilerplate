import React from 'react';

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Burger({ isOpen, setIsOpen }: BurgerProps) {
  const genericHamburgerLine =
    'h-1 w-6 my-1 rounded-full bg-primary-dark-0 transition ease transform duration-300';

  return (
    <button
      className="group relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-primary-dark-0 bg-primary-light-100 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'translate-y-3 rotate-45 ' : ''
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-translate-y-3 -rotate-45 ' : ''
        }`}
      />
    </button>
  );
}

export default Burger;
